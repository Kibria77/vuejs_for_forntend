<template>
  <div id="app">
    <NavBar :key="$route.path"/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
  import NavBar from "@/components/includes/NavBar";
  import MyFooter from "@/components/includes/FooterMenu";

  export default {
    name: "App",
    components: {NavBar, MyFooter},
  }
</script>

<style>

</style>
