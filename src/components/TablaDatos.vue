<template>
    <div>
        <table class="table mt-5" >
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
                <tr v-for="(item, index) of pagos" :key="index">
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
export default {
    name: 'TablaDatos',
    props: {
        pagos: {
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