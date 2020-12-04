<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/fotos.png">
    <Inicio/>
  </div>
</template>

<script>
import Inicio from './components/Inicio.vue'

export default {
  components: {
    Inicio
  }
}
</script>

<style>
#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
