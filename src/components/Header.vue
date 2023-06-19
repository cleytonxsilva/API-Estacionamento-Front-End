<template>
  <header>
    <div class="container-md">
      <div class="row align-items-center justify-content-around flex-sm-wrap">
        <div class="col-sm-4 col-lg-2 align-self-center">
          <router-link to="/"><img src="../assets/logo.png.png" alt="logo.png" class="col-sm-6 img-tumbnail" id="logo"></router-link>
        </div>
        <div class="col-sm-8 col-md-10 justify-content-center">
          <nav class="navbar">
            <div class="row navbar-nav">
              <router-link class="col-auto" to="/">Home</router-link>
              <router-link class="col-auto" to="/condutor-lista">Condutor</router-link>
              <router-link class="col-auto" to="/marca-lista">Marca</router-link>
              <router-link class="col-auto" to="/modelo-lista">Modelo</router-link>
              <router-link class="col-auto" to="/veiculo-lista">Veículo</router-link>
              <router-link class="col-auto" to="/movimentacao-lista">Movimentação</router-link>
              <router-link class="col-auto" to="/configuracao">Configuração</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>

<style scoped lang="scss">
* {

  padding: 5px;
  box-sizing: border-box;

}

header {
  border-bottom: 1px solid #ffffff4f;
}

nav {

  a {
    font-weight: bold;
    text-decoration: none;
    color: #B3B3B3;

    &.router-link-exact-active {
      color: #FFFFFF;
    }
  }
}

.navbar-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}
</style>
