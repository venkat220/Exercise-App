<template>
  <div>
    <mdb-navbar position="top" dark color="indigo" scrolling>
      <mdb-navbar-brand href="/">
      Fitness
    </mdb-navbar-brand>
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
              <div class="white-text text-center">
                <h2>
                  W E L L B E I N G
                </h2>
                <h4>Once you can control your mind, you can control your body.</h4>
                <p>Tomorrow is the first blank page of a 365-page book. Write a good one.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="m-5">We are excited to announce that our Fitness Center at the Bernikow Building has reopened. Learn more here!

We are also continuing to offer pop-up outdoor group exercise classes for Active Members, including hikes and mind-body classes. Sign up here.</p>
    </div>
  </div>
</template>

  <style scoped>
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg")
      no-repeat center center;
    background-size: cover !important;
    height: 100%;
	margin-top:-12vh;
  }
  .navbar a:hover {
    color: inherit !important;
  }
  </style>
<script>
  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand
  } from "mdbvue";
  export default {
    name: "Index",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbNavbarBrand
    }
  };

</script>

