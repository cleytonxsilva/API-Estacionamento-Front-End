<template>
  <header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <a href="/"><img src="../assets/logo.png.png" alt="logo.png" class="navbar-brand" id="logo"></a>
        </div>
        <div class="col-8 justify-content-center">
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
.container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
nav {
  
  a {
    font-weight: bold;
    text-decoration: none;
    color: rgb(155, 155, 155);

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
