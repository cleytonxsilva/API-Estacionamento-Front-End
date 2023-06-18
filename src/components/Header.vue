<template>
  <header>
    <div class="container">
      <div class="row align-items-center justify-content-center flex-sm-wrap">
        <div class="col-sm-4 col-lg-auto align-self-center">
          <router-link to="/"><img src="../assets/logo.png.png" alt="logo.png" class="col-sm-6 float-start" id="logo" width="100"></router-link>
        </div>
        <div class="col-sm-8 col-lg-auto justify-content-center">
          <nav class="navbar">
            <div class="navbar-nav">
              <router-link to="/">Home</router-link>
              <router-link to="/condutor-lista">Condutor</router-link>
              <router-link to="/marca-lista">Marca</router-link>
              <router-link to="/modelo-lista">Modelo</router-link>
              <router-link to="/veiculo-lista">Veículo</router-link>
              <router-link to="/movimentacao-lista">Movimentação</router-link>
              <router-link to="/configuracao">Configuração</router-link>
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
header{
  border-bottom: 1px solid #ffffff4f;
}
.container {
  margin: 0;
  padding: 15px;
  box-sizing: border-box;

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
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}
</style>
