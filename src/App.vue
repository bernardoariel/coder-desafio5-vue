<template>
  <div id="app">
    <div class="row">
      <nav class="col-10">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/pagar">Pagar</router-link> |
        <router-link to="/todos">Todos Los Registros</router-link>
      </nav>
      <div class="col-2 pt-5">
        <h5 class="text-white bg-dark float-left"><span class="text-warning">Ultimo Pago: </span>${{obtenerUltimoImporte}}</h5>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>
<script>

import {  mapGetters, mapState } from 'vuex';
export default{
 computed:{
  ...mapState(['obtenerTotal','transacciones','ultimoPago']),
  ...mapGetters(['obtenerUltimoImporte'])
 },
 mounted() {
    // Ejecutar la acción para obtener las transacciones de la API
    this.$store.dispatch('obtenerTransacciones');
    const ultimoElemento = this.transacciones[this.transacciones.length - 1];
    const ultimoValor = ultimoElemento.importe;
    this.$store.commit('actualizarUltimoPago', ultimoValor);

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
