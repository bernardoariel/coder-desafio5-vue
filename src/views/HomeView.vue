<template>
  <div class="home">
    <h1 class="alert alert-danger">Total de Pagos $ {{ total }}</h1>
    <h3></h3>
  </div>
</template>

<script>


import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
  
    return {
      pagos: [],
      total: 0
    };  

  },
  mounted() {
    this.obtenerPagos();
  },
  methods: {
    async obtenerPagos() {
      const {data} = await axios.get('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago');
      this.pagos = data;
      this.calcularTotal();
    },
    calcularTotal() {
      this.total = this.pagos.reduce((total, pago) => total + pago.importe, 0);
    }
  },
  
}
</script>
