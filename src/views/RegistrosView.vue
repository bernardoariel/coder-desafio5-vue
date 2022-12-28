<template>

    <div>
       
        <tabla-datos titulo="Mostrando todos los registros" todos="true" /> 

    </div>

</template>
  
<script>
import TablaDatos from '@/components/TablaDatos.vue';
 
export default {
    name: 'HomeView',
    components: {
        TablaDatos

    },
    data() {
    
        return {
          
        };
},
    

  }
  </script>