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
              <mdb-card>
                <mdb-card-title class="mt-4 h2">Add Post</mdb-card-title>
                <mdb-card-body>
                  <mdb-card-text class="pr-5 pl-5" mr-4 ml-4
                    >Post your Blogs</mdb-card-text
                  >
                  <form>
                    <mdb-row>
                      <mdb-col>
                        <mdb-row>
                          <mdb-col>
                            <mdb-input
                              type="text"
                              label="Title"
                              v-model="fields.title"
                              required
                            />
                          </mdb-col>
                        </mdb-row>
                        <mdb-row>
                          <mdb-col>
                            <!-- <mdb-file-input  multiple sm btnColor="primary" /> -->
                          </mdb-col>
                        </mdb-row>
                        <mdb-row>
                          <mdb-col>
                            <mdb-input
                              type="textarea"
                              label="Description"
                              v-model="fields.description"
                              required
                            />
                          </mdb-col>
                        </mdb-row>
                      </mdb-col>
                    </mdb-row>
                    <mdb-btn color="primary" v-on:click = "submitPost()" type="button" class="float-left"
                      >Send</mdb-btn
                    >
                  </form>
                </mdb-card-body>
              </mdb-card>
            </mdb-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
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
  mdbContainer,
  mdbInput,
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  // mdbFileInput,
  mdbBtn,
  mdbRow,
  mdbCol,
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  name: "Posts",
  components: {
    mdbContainer,
    mdbInput,
    mdbCard,
    // mdbFileInput,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbBtn,
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
      fields: {
        title: "",
        description: "",
        image: null,
      },
    };
  },
  methods: {
    submitPost: function() {
      alert('hi')
     let user = sessionStorage.getItem("user");
     console.log(user)
     let data = []
     data['titleName'] = this.fields.title;
     data['description'] = this.fields.description;
      this.axios
        .post(
          "http://localhost:8000/api/post",
          data,user
        )
        .then((response) => {
          var rData = response.data;
          this.users = rData;
          console.log(this.users);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
      // submit form
    },
  },
};
</script>

