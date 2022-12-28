<template>
  <div>
      <h1 class="mt-3 ">{{ titulo }}</h1>
      <table class="table" v-if="todos !== 'true'">
          <thead class="bg-dark text-white">
              <tr>
                  <td>Nro.Tarjeta</td>
                  <td>Mes que Expira</td>
                  <td>Año que Expira</td>
                  <td>Codigo de Seguridad</td>
                  <td>Importe</td>
              </tr>
          </thead>
          <tbody>
            <tr class="primera-fila" v-bind:class="{ 'bg-info': index === primeraFila }" v-for="(item, index) of ultimasTransacciones" :key="index">
                    <td>{{ item.expMes }}</td>
                    <td>{{ item.expAnio }}</td>
                    <td>{{ item.ccv }}</td>
                    <td>{{ item.nombreTarjeta }}</td>
                    <td>$ {{ item.importe }} .-</td>
            </tr>
          </tbody>
      </table>
      <table class="table" v-else>
          <thead class="bg-dark text-white">
              <tr>
                  <td>Nro.Tarjeta</td>
                  <td>Mes que Expira</td>
                  <td>Año que Expira</td>
                  <td>Codigo de Seguridad</td>
                  <td>Importe</td>
              </tr>
          </thead>
          <tbody>
            <tr class="primera-fila" v-bind:class="{ 'bg-info': index === 50000 }" v-for="(item, index) of todosLosPagos" :key="index">
                    <td>{{ item.expMes }}</td>
                    <td>{{ item.expAnio }}</td>
                    <td>{{ item.ccv }}</td>
                    <td>{{ item.nombreTarjeta }}</td>
                    <td>$ {{ item.importe }} .-</td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
// import { mapGetters } from 'vuex';
export default {

  name: 'TablaDatos',
  props: {
    titulo: {
      type: String,
      required: true
    },
    todos:{
      type: String
    }
  
  },
  data() {
      return {
          primeraFila: 0,
          todosLosPagos:[]
      };
  },

  computed: {
      ...mapGetters(['ultimasTransacciones'])
  },
  methods: {
    async llamarApi(){
      const {data} = await axios.get('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago');
      this.todosLosPagos = data
    },
    async agregarTransaccion() {
      // ...
      this.primeraFila = 0;// this.ultimasTransacciones.length - 1;
      setTimeout(() => {
        this.primeraFila = -1;
      }, 5000);
    }
  },
  watch: {
    ultimasTransacciones() {
      this.agregarTransaccion();
    }
  },
  mounted() {
    if (this.todos === "true") {
      this.llamarApi();
    }
    setTimeout(() => {
      const primeraFila = this.$el.querySelector('.primera-fila');
      primeraFila.classList.remove('bg-info');
    }, 5000);
  
}



 
};
</script>
<style scoped>
  .primera-fila {
    transition: background-color 0.5s;
  }
</style>