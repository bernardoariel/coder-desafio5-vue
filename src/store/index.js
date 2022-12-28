import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalPagos:1000,
    transacciones:[{
      "nroCredito": "nroCredito 36",
      "expMes": 67,
      "expAnio": 81,
      "ccv": 76,
      "nombreTarjeta": "nombreTarjeta 36",
      "emailCliente": "emailCliente 36",
      "importe": 74,
      "id": "36"
    },
    {
      "nroCredito": "4234214124124123",
      "expMes": "12",
      "expAnio": "2022",
      "ccv": 1216,
      "nombreTarjeta": "arerre",
      "emailCliente": "asds@hotmail.com",
      "importe": 14488,
      "id": "37"
    }
  ],
    ultimoPago:0
  },

  getters: {
   
    ultimasTransacciones: state => {
      return state.transacciones.slice(state.transacciones.length - 5, state.transacciones.length).reverse();
    },
    obtenerUltimoImporte: (state) => {
      return state.transacciones.length > 0 ? state.transacciones[state.transacciones.length - 1].importe : 0;
    }
  },

  mutations: {
    todosLosPagos(state,transaccionesApi){
      state.transacciones= transaccionesApi
    },
    actualizarTransacciones(state, transacciones) {
      state.transacciones = transacciones;
    },
    actualizarUltimoPago(state, ultimoPago) {
      state.ultimoPago = ultimoPago;
    }
  },

  actions: {
    getApi: async function({commit}){
      const {data} = await axios.get('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago');
      commit('todosLosPagos',data) 
    },
    // Acción para obtener todas las transacciones de la API
    obtenerTransacciones: async function({commit}) {
      // Hacer la llamada a la API
      const {data} = await axios.get('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago');
      // Ejecutar la mutación para actualizar el estado con las transacciones obtenidas de la API
      commit('actualizarTransacciones', data.slice(-20));
    },
    // Acción para agregar una nueva transacción
    agregarTransaccion: async function({commit}, transaccion) {
      // Hacer la llamada a la API para agregar la transacción
      const response = await axios.post('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago', transaccion);
      if (response.status === 201) {
        // Si se agregó correctamente, obtener de nuevo todas las transacciones de la API
        // y ejecutar la mutación para actualizar el estado
        const {data} = await axios.get('https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago');
        commit('actualizarTransacciones', data.slice(-20));
      }
    },
    actualizarUltimoPago: function({commit}, ultimoPago) {
      commit('actualizarUltimoPago', ultimoPago);
    }
  }
   
})
