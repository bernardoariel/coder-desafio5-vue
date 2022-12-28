<template>
  <div class="container">
    <div class="alert alert-danger mt-3" v-if="errores.length >= 1">
        Revise por favor los siguientes inputs
        <ul>
            <li v-for="(item,index) of errores" :key="index">{{ item }}</li>
        </ul>
      
    </div>
    <form ref="form" @submit.prevent="enviarForm">
        <div class="abs-center">
        <div class="card center border-danger mt-5" style="height: 26em">
            <div class="card-body">
            <h4 class="card-title">Ingrese sus datos de Pago:</h4>
            <hr />

            <!-- linea 1 -->
            <div class="row">
                <div class="col-md-12">
                <span class="help-block text-muted float-start"
                    ><small>Nro. Tarjeta de Credito</small></span
                >

                <the-mask
                    v-model="nroCredito"
                    type="text"
                    class="form-control"
                    :mask="['####-####-####-####']"
                />
                </div>
            </div>

            <!-- linea 2 -->
            <div class="row mt-2">
                <div class="col-md-3 col-sm-3 col-xs-3">
                <span class="help-block text-muted small-font"
                    ><small>Exp.Mes</small></span
                >
                <input
                    v-model="expMes"
                    type="number"
                    class="form-control"
                    min="1"
                    max="12"
                />
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                <span class="help-block text-muted small-font"
                    ><small>Exp.Año</small></span
                >
                <input
                    v-model="expAnio"
                    type="number"
                    min="2022"
                    class="form-control"
                    placeholder="YY"
                />
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                <span class="help-block text-muted small-font"
                    ><small>CCV</small></span
                >
                <input
                    v-model="ccv"
                    type="text"
                    class="form-control"
                    placeholder="CCV"
                    
                />
                </div>
                <div class="col-md-1">
                <span class="help-block text-muted small-font"
                    ><small>-</small></span
                >
                <img
                    src="../assets/tarjeta1.png"
                    alt="tarjeta de credito"
                    width="50"
                    class="rounded"
                />
                </div>
            </div>
            <!-- linea 3 -->
            <div class="row mt-2">
                <div class="col-md-12">
                <span class="help-block text-muted small-font"
                    ><small>Nombre como figura en la Tarjeta</small></span
                >
                <input
                    v-model="nombreTarjeta"
                    type="text"
                    class="form-control"
                    placeholder="Nombre como en la tarjeta"
                />
                </div>
            </div>
            <!-- linea  -->
            <div class="row mt-2">
                <div class="col-md-12">
                <span class="help-block text-muted small-font"
                    ><small>Ingrese su Email para enviar comprobante</small></span
                >
                <input
                    v-model="emailCliente"
                    type="email"
                    class="form-control"
                    placeholder="Ingrese un email"
                />
                </div>
            </div>

            <!-- linea 4 -->
            <div class="row mt-2">
                <div class="col">
                    <input
                        type="button"
                        class="btn btn-secondary btn-block float-start"
                        value="Limpiar"
                        @click="limpiarForm()"
                    />
                    <input
                        type="submit"
                        class="btn btn-warning btn-block float-end"
                        value="Pagar Ahora"
                        :disabled="desabilitar"
                    />
                </div>
            </div>
            </div>
        </div>
        </div>
    </form>
    <tabla-datos titulo="Mostrando ultimos 5 pagos"/>
    
    
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import TablaDatos from './TablaDatos.vue';
import axios from "axios";
export default {
  name: "FormularioWeb",
  components: { TheMask, TablaDatos },
  data() {
  
    return {
      nroCredito: "",
      expMes: 1,
      expAnio: "2022",
      ccv: "",
      nombreTarjeta: "",
      emailCliente:"",
      pago: [],
      miPago: {},
      errores: [],
      desabilitar: false,
      baseURL:'https://63aa17bc7d7edb3ae6204df2.mockapi.io/pago'
    };
  },

  mounted() {
        this.mostrarPagos();
  },

  methods: {
    async mostrarPagos(){
        //vacio el array
        this.pago = [];
        //traigo los datos de mokapi
        const {data} = await axios.get(this.baseURL);
        this.pago = data.slice(1,4)
        //cargarlo en el state
    },
    async enviarForm() {
      /* cuando entro en la funcion desabilito el boton */
      this.desabilitar = !this.desabilitar;
      /* hice un importe aleatoreo */
      let importe = Math.round(Math.random() * (50000 - 1500) + 1500);
      /* valido el form */  
      this.validarForm()
      /* si no tengo errores lo guardo en una variable y luego la agrego al array json */
      if (this.errores.length == 0) {
        this.miPago = {
          nroCredito: this.nroCredito,
          expMes: this.expMes,
          expAnio: this.expAnio,
          ccv: this.ccv,
          nombreTarjeta: this.nombreTarjeta,
          emailCliente: this.emailCliente,
          importe,
        };
        
        this.$store.dispatch('agregarTransaccion', this.miPago);
        const ultimoPago = this.$store.state.transacciones[this.$store.state.transacciones.length - 1].importe;
        this.$store.dispatch('actualizarUltimoPago', ultimoPago);               
        
        // this.pago.push(this.miPago);
        /* habilito el boton */
        this.desabilitar = true;
        this.limpiarForm()
      }

      setTimeout(() => {
        this.errores = [];
        this.desabilitar = false;
        
      }, 5000);
    },
    validarForm(){

      if (this.nroCredito.length == 0) this.errores.push("Numero de Tarjeta de Credito");
      if (this.length == 0) this.errores.push("Mes de expiracion de la tarjeta");
      if (this.expAnio == 0) this.errores.push("Año de expiracion de la tarjeta");
      if (this.ccv == 0) this.errores.push("Codigo de seguridad de la tarjeta");
      if (this.nombreTarjeta == 0) this.errores.push("Nombre de la tarjeta");
      if (!this.emailCliente.includes('@')) this.errores.push("No es un Email Correcto");  
     
      //   if (this.ccv.length != 3) this.errores.push("Codigo de seguridad debe tener 3 dígitos");
   
      /* parseo el ccv */
      this.ccv = +this.ccv
      if (isNaN(this.ccv)){
          
          this.ccv =''
          this.errores.push("Codigo de seguridad debe ser un numero");
       } else if(typeof this.ccv != 'number') this.errores.push("Codigo de seguridad debe ser un numero")

    },
    limpiarForm(){
       /*  this.$refs.form.reset() */
        this.miPago = {}
        this.nroCredito= ""
        this.expMes= 1
        this.expAnio= "2022"
        this.ccv= ""
        this.nombreTarjeta= ""
        this.emailCliente=""
        this.miPago= {}
        
    }
  },
  computed: {
   
  },
};
</script>

<style scoped>
.abs-center {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  min-height: 50vh;
}
</style>
