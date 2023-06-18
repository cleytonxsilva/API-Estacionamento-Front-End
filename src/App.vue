
<template>
  <Header />
  <router-view />
</template>
<script lang="ts">

import  Header from '@/components/Header.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Header
  },
});
</script>

<style lang="scss">
  
  // Import Bootstrap
  $primary: #900;
  $enable-shadows: true;
  $prefix: "mo-";
  
  @import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
