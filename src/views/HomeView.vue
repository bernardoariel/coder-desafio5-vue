<template>
  <div class="home">
    <h1 class="alert alert-danger">Ultimo Pago $ {{ totalPagos }}</h1>
    <h3></h3>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  name: 'HomeView',
 
  data() {
  
    return {
    
    };

  },
  computed:{
    ...mapState(['totalPagos'])
  },
 
}
</script>
