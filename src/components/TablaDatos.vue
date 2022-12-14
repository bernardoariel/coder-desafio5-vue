<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <td>Nro.Tarjeta</td>
                    <td>Mes que Expira</td>
                    <td>Año que Expira</td>
                    <td>Codigo de Seguridad</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of datos" :key="index">
                    <td>{{ this.datos.expMes }}</td>
                    <td>{{ this.datos.expAnio }}</td>
                    <td>{{ this.datos.ccv }}</td>
                    <td>{{ this.datos.nombreTarjeta }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TablaDatos',
    props: {
        pago: {
        type: Array,
        required: true
     }
    },
    data() {
        return {
            
        };
    },

   
};
</script>

<style lang="scss" scoped>

</style>