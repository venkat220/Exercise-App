<template>
  <div>
    <mdb-navbar position="top" dark color="indigo" scrolling>
      <mdb-navbar-brand href="/"> Fitness </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item router to="/Home" active>Home</mdb-nav-item>
          <mdb-nav-item router to="/Exercise">Exercise</mdb-nav-item>
          <mdb-nav-item router to="/Friends">Friends</mdb-nav-item>
          <mdb-nav-item router to="/Posts">Posts</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item router to="/Login">Logout</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div style="height: 110vh">
      <div class="view intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask rgba-black-light">
            <mdb-container style="margin-top: 10vh">
              <mdb-row>
                <mdb-col md="3">
                  <h4>Followers</h4>
                  <mdb-jumbotron fluid class="mb-0">
                    <mdb-container>
                      <mdb-card
                        v-for="follower in followers"
                        v-bind:key="follower._id"
                      >
                        <mdb-card-body>
                          {{ follower.firstName }}
                          <i v-on:click="acceptFriend(follower._id)">
                            <mdb-icon icon="user-friends"
                          /></i>
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-container>
                  </mdb-jumbotron>
                </mdb-col>
                <mdb-col md="6">
                  <mdb-container>
                    <div class="flex-center">
                      <mdb-form-inline class="active-cyan-2">
                        <input
                          class="form-control mr-sm-2"
                          type="text"
                          placeholder="Search to add friend"
                          aria-label="Search"
                          v-on:input="searchUsers"
                        />
                        <mdbIcon icon="search" />
                      </mdb-form-inline>
                    </div>

                    <mdb-card v-for="user in searchData" v-bind:key="user._id">
                      <mdb-card-body>
                        {{ user.firstName }}
                        <i v-on:click="addFriend(user._id)">
                          <mdb-icon icon="user-friends"
                        /></i>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-container>
                </mdb-col>
                <mdb-col md="3">
                  <h4>Friends</h4>
                  <mdb-jumbotron fluid class="mb-0">
                    <mdb-container> </mdb-container> </mdb-jumbotron
                ></mdb-col>
              </mdb-row>
            </mdb-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
.active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input[type="text"] {
  border: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.view {
  background: url("https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg")
    no-repeat center center;
  background-size: cover !important;
  height: 100%;
  margin-top: -12vh;
}
.navbar a:hover {
  color: inherit !important;
}
</style>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import {
  mdbIcon,
  mdbFormInline,
  mdbCardBody,
  mdbCard,
  mdbJumbotron,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  name: "Friends",
  components: {
    mdbIcon,
    mdbFormInline,

    mdbCardBody,
    mdbCard,
    mdbJumbotron,
    mdbContainer,
    mdbRow,
    mdbCol,

    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
  },

  data() {
    return {
      users: [{ email: "sai@mail.com" }, { email: "mounika@mail.com" }],
      searchData: [],
      followers: [],
    };
  },
  methods: {
    acceptFriend: function (id) {
      alert(id);
    },

    addFriend: function (id) {
      let user = sessionStorage.getItem("user");
      this.axios
        .post(
          "http://localhost:8000/api/follow",
          { user: user },
          { params: { id: id } }
        )
        .then((response) => {
          var rData = response.data;
          this.users = rData;
          console.log(this.users);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    },
    searchUsers: function (event) {
      console.log(event.target.value);
      //   let filterValue = event.target.value;

      this.searchData = this.users;
      //   console.log(this.searchData);

      //   let result = this.events
      // if (!this.filterValue)
      //   return result

      // const filterValue = this.filterValue.toLowerCase()

      // const filter = event =>
      //     event.name.toLowerCase().includes(filterValue) ||
      //     event.state.toLowerCase().includes(filterValue) ||
      //     event.tags.some(tag => tag.toLowerCase().includes(filterValue))

      // return result.filter(filter)
    },

    search_Change: function () {
      alert("hi");
      var data = {};
      data["search"] = this.follower;
      this.axios
        .post("http://localhost:8000/api/follow/getAllUser", data)
        .then((response) => {
          var rData = response.data;
          this.users = rData;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.axios
      .get("http://localhost:8000/api/follow/getAllUser")
      .then((response) => {
        var rData = response.data;
        this.users = rData;
        console.log(this.users);
      })
      .catch((e) => {
        this.errors.push(e);
      });
    this.axios
      .get("http://localhost:8000/api/follow/getFollowers")
      .then((response) => {
        var rData = response.data;
        this.followers = rData;
        console.log(this.followers);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

