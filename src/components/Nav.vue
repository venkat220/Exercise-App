<template>
  <div>

<mdb-navbar position="top" dark color="indigo" scrolling>
      <mdb-navbar-brand router to="/">
      Fitness
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item router to="/Register" active>Sign Up</mdb-nav-item>
        <mdb-nav-item router to="/Login">Login</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
    </mdb-navbar>

    </div>
    </template>
<style scoped>
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
    name: "Nav",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbNavbarBrand
    }
  };
    </script>