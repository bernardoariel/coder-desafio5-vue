<template>
    <div>
        <formulario-web />
   </div>
  </template>
  
  <script>
import FormularioWeb from '@/components/FormularioWeb.vue';
  
  
  export default {
    name: 'HomeView',
    components: {
        FormularioWeb

    },
    data() {
    
        return {
            total: 1500,
        };

  },
  }
  </script>