
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
      <div class="view intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask rgba-black-light">
            <div class="container flex-center">
              <mdb-card class="matsize">
                <mdb-card-body class="mx-4">
                  <div class="text-center">
                    <h3 class="dark-grey-text mb-5">
                      <strong>Sign in</strong>
                    </h3>
                  </div>
                  <mdb-input label="Your email" type="email" v-model.trim="credentials.email" />
                  <mdb-input
                    label="Your password"
                    type="password"
                    containerClass="mb-0"
                    v-model.trim="credentials.password"
                  />

                  <div class="text-center mb-3">
                    <mdb-btn
                    v-on:click="fitnessLogin()"
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
                    Not a member?
                    <a href="#" class="blue-text ml-1"> Sign Up</a>
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
  height: 50vh;
  width: 70vh;
}
</style>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
/* eslint-disable no-mixed-spaces-and-tabs */
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
  name: "Login",
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
      credentials: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  mounted() {
    if (sessionStorage.isLoggedIn) {
      this.$router.push("/Exercise");
    }
  },
  methods: {
    validateFields() {
      // email
      // if (this.credentials.username.length === 0) {
      //   this.error = "Username is required";
      //   return false;
      // }
      // // password
      // if (this.credentials.password.length === 0) {
      //   this.error = "Password is required";
      //   return false;
      // }
      return true;
    },
    fitnessLogin() {
      var data = {};
      data["email"] = this.credentials.email;
      data["password"] = this.credentials.password;

      // let users = JSON.parse(sessionStorage.getItem("users"));
   
      
       this.axios.post(
            "http://localhost:8000/api/auth/login",
            data
          ).then(response => {
            console.log(response.data.token);
				if(response) {
          let user = response.data.user
          console.log(user)
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("token",JSON.stringify(response.data.token))
					// this.$socket.emit('emit_method', this.email);
          sessionStorage.setItem("isLoggedIn", true);
					this.$router.push('/Exercise');
				}
				else {
					this.error = '<div class="alert alert-danger"><span>Enter correct username and password. </span></div>';
				}
			})
      }
      
  
  },
  
};

</script>