<template>
      <header class="header">
      <div class="container">
        <div class="col-3">
          <a href=""><img src="" alt="" class="navbar-brand" id="logo"></a>
        </div>
        <div class="col-5">
          <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links"
              aria-controls="navbar-links" aria-extend="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span></button> <!--botao menu mobile-->
            <div class="collapse navbar-collapse justify-content-center" id="navbar-links">
              <div class="navbar-nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/condutor-lista">Condutor</router-link> |
                <router-link to="/marca-lista">Marca</router-link> |
                <router-link to="/modelo-lista">Modelo</router-link> |
                <router-link to="/veiculo-lista">Veículo</router-link> |
                <router-link to="/movimentacao-lista">Movimentação</router-link> |
                <router-link to="/configuracao">Configuração</router-link>
              </div>
            </div>
          </nav>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
