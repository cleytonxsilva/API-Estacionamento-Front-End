<template>
    <div class="marca-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Marcas</h2>
        </div>
        <div class="col-3">
            <router-link to="/marca-form">
                <button class="btn btn-success" type="button" @click="cadastrarMarca">Cadastrar Marca</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-8 text-start" scope="col">Marca</th>
                    <th class="col-3 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-start">{{ item.marca }}</td>
                    <td>
                        <button class="btn btn-outline-warning">Editar</button>
                        <button class="btn btn-outline-danger">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">

export default {
    data() {
        return {
            items: [
                { id: 1, marca: 'Chevrolet' },
                { id: 2, marca: 'Ford' },
                { id: 3, marca: 'Fiat' },
                { id: 4, marca: 'Honda' },
                { id: 5, marca: 'Hyundai' }
            ]
        };
    },
    // components: {
    //     MarcaForm,
    // },
    methods: {
        cadastrarMarca() {
            console.log("ok");
        }
    }
}


</script>
<style scoped>

</style>