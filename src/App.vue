<template>
<!--  <router-link to="hitch_ride">顺风车</router-link>-->
<!--  <router-link to="second_hand">二手车</router-link>-->
<!--  <router-link to="/mine/register_login">登陆注册</router-link>-->
  <router-view />
  <NavigationBar />
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "App",
  components: {
    NavigationBar
  }
};
</script>

<style lang="scss">

</style>
