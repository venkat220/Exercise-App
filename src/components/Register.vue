
	<!-- start: REGISTRATION -->
<template>
  <div>
    <h1></h1>
    <mdb-navbar position="top" dark color="indigo" scrolling>
      <mdb-navbar-brand router to="/"> Fitness </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item router to="/Register" active>Sign Up</mdb-nav-item>
          <mdb-nav-item router to="/Login">Login</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div style="height: 110vh">
      <div class="view intro-2" style="height: 110vh">
        <div class="full-bg-img">
          <div class="mask rgba-black-light">
            <div class="container flex-center">
              <mdb-card class="matsize">
                <mdb-card-body class="mx-4">
                  <div class="text-center">
                    <h3 class="dark-grey-text mb-5">
                      <strong>Sign Up</strong>
                    </h3>
                  </div>
                  <mdb-input
                    label="First Name"
                    type="text"
                    v-model.trim="user.firstname"
                  />
                  <mdb-input
                    label="Last Name"
                    type="text"
                    v-model.trim="user.lastname"
                  />
                  <mdb-input
                    label="Your email"
                    type="email"
                    v-model.trim="user.email"
                  />
                  <mdb-input
                    label="Mobile"
                    type="number"
                    v-model.trim="user.mobileNumber"
                  />
                  <mdb-input
                    label="Your password"
                    type="password"
                    containerClass="mb-0"
                    v-model.trim="user.password"
                  />

                  <mdb-input
                    label="Weight"
                    type="email"
                    v-model.trim="user.weight"
                  />
                  <mdb-input
                    label="Height"
                    type="email"
                    v-model.trim="user.height"
                  />
                  <mdb-input
                    label="Age"
                    type="email"
                    v-model.trim="user.age"
                  />
                  <mdb-input
                    label="BMI"
                    type="email"
                    v-model.trim="user.BMI"
                  />
                  <div class="text-center mb-3">
                    <mdb-btn
                      v-on:click="fitnessRegister"
                      type="button"
                      gradient="blue"
                      rounded
                      class="btn-block z-depth-1a"
                      >Sign in</mdb-btn
                    >
                  </div>
                </mdb-card-body>
                <mdb-modal-footer class="mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">
                    Have an Account?
                    <router-link to="/Login" class="blue-text ml-1">
                      Sign Up</router-link
                    >
                  </p>
                </mdb-modal-footer>
              </mdb-card>
            </div>
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
.form-elegant .font-small {
  font-size: 0.8rem;
}

.form-elegant .z-depth-1a {
  -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
}

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
}
.navbar a:hover {
  color: inherit !important;
}
/* eslint-disable no-mixed-spaces-and-tabs */
.matsize {

  width: 70vh;
}
</style>
<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import {
  mdbCard,
  mdbInput,
  mdbBtn,
  mdbModalFooter,
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  name: "Register",
  components: {
    mdbCard,
    mdbInput,
    mdbBtn,

    mdbModalFooter,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
  },
  data() {
    return {
      user: {
        password: "",
        firstname: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        age: "",
        weight: "",
        height: "",

        BMI: "",
      },
    };
  },
  methods: {
    validateFields() {
      //   // username
      //   if (this.user.username.length === 0) {
      //     this.error = "Email should not be empty";
      //     return false;
      //   }
      //   // firstname
      //   if (this.user.fullname.length === 0) {
      //     this.error = "fullname should not be empty";
      //     return false;
      //   }
      //   // password
      //   if (this.user.password.length === 0) {
      //     this.error = "Password is required";
      //     return false;
      //   }
      //     // lastname
      //   if (this.user.age.length === 0) {
      //     this.error = "age should not be empty";
      //     return false;
      //   }
      //   if (this.user.weight.length === 0) {
      //     this.error = "weight should not be empty";
      //     return false;
      //   }
      // if (this.user.height.length === 0) {
      //     this.error = "height should not be empty";
      //     return false;
      //   }
      return true;
    },

    fitnessRegister: function () {
      var data = {};
      data["firstname"] = this.user.firstname;
      data["lastname"] = this.user.lastname;
      data["email"] = this.user.email;
      data["mobileNumber"] = this.user.mobileNumber;
      data["weight"] = this.user.weight;
      data["height"] = this.user.height;
      data["age"] = this.user.age;
      data["password"] = this.user.password;
      console.log(data);
      async function hp() {
        try {
          let result = await axios.post(
            "http://localhost:8000/api/auth/signup",
            data
          );
          console.log(result);
        } catch (e) {
          console.log(e.response.data);
        }
      }
      hp();
    },
  },
};
</script>