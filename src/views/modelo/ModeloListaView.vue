<template>
    <div class="modelo-lista"></div>
    <div class="row">
        <div class="col-10 text-start">
            <h2>Modelos</h2>
        </div>
        <div class="col-2">
            <router-link to="/modelo-form">
                <button class="btn btn-success" type="button" @click="">Cadastrar Modelo</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-6 text-start" scope="col">Modelo</th>
                    <th class="col-2 text-start" scope="col">Marca</th>
                    <th class="col-3" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-start">{{ item.modelo }}</td>
                    <td class="text-start">{{ item.marca }}</td>
                    <td>
                        <button class="btn btn-outline-success">Mostrar Mais</button>
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
                { id: 1, modelo: 'Corsa', marca: 'Chevrolet' },
                { id: 2, modelo: 'Fiesta', marca: 'Ford' },
                { id: 3, modelo: 'Uno', marca: 'Fiat' },
                { id: 4, modelo: 'Civic', marca: 'Honda' },
                { id: 5, modelo: 'HB-20', marca: 'Hyundai' }
            ]
        }
    },
        // },
        // components: {
        //     ModeloForm,
        // },
        methods: {
            cadastrarModelo() {
                console.log("ok");
            }
        }
    }
</script>
<style scopedx>
</style>



