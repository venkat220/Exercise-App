<template>
<div style="display: flex; flex-direction: column">
  <b-autocomplete
    :data="data"
    class="custom-auto"
    placeholder="e.g. Once Upon A Snowman"
    field="title"
    icon-pack="fas"
    icon="search"
    size="is-small"
    :loading="isFetching"
    dropdown-position="auto"
    @typing="getAsyncData"
    @select="option => selected = option"
    @infinite-scroll="getMoreAsyncData">
    <template slot-scope="props">
      <div class="media">
        <!-- <div class="media-left">
          <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
        </div> -->
        <div class="media-content">
            {{ props.option.title }}
            <br>
            <small>
              Released at {{ props.option.release_date }},
              rated <b>{{ props.option.vote_average }}</b>
            </small>
        </div>
      </div>
    </template>
  </b-autocomplete>
  <div style="display: flex; justify-content: flex-end; padding-right: 2px;">
    <small v-if="isEmpty" style="color: lightgray; margin-top: 2px">Sorry! No results found</small>
  </div>
</div>
</template>
<script>
  import debounce from 'lodash/debounce'
  import axios from 'axios';

  export default {
    data() {
      return {
        data: [],
        selected: null,
        isFetching: false,
        name: '',
        page: 1,
        totalPages: 1,
        isEmpty: false
      }
    },
    methods: {
      getAsyncData: debounce(function (name) {
          if (name.length === 0) {
            this.isEmpty = false;
          }
          if (this.name !== name) {
            this.name = name
            this.data = []
            this.page = 1
            this.totalPages = 1
          }
          if (!name.length) {
            this.data = []
            this.page = 1
            this.totalPages = 1
            return
          }
          if (this.page > this.totalPages) {
            return
          }
          this.isFetching = true
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}&page=${this.page}`)
            .then(({ data }) => {
              data.results.length === 0 ? this.isEmpty = true : this.isEmpty = false;
              data.results.forEach((item) => this.data.push(item));
              this.page++
              this.totalPages = data.total_pages
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                this.isFetching = false
            })
        }, 500),
        
      getMoreAsyncData: debounce(function () {
        this.getAsyncData(this.name)
      }, 250)
    }
  }
</script>

<style scoped lang="scss">
  .custom-auto {
    width: 260px;
  }
</style>