
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
  color: black;
}


body{
  background-color: #1E1E1E;
  //#1E1E1E
  
}
h1, h2, h3, p, label{
  color: #FFFFFF;
}
</style>
