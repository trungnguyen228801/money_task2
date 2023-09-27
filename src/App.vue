<template>
  <base-nav/>
  <router-view></router-view>
</template>

<script>
import BaseNav from './components/BaseNav.vue';

export default {
  name: 'App',
  components: {
    BaseNav,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
