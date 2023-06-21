<template>
    <div class="veiculo-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Veículo</h2>
        </div>
        <div class="col-3">
            <router-link to="/veiculo-form">
                <button class="btn btn-success" type="button" @click="cadastrarVeiculo">Cadastrar Veículo</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-2 text-start" scope="col">Placa</th>
                    <th class="col-1 text-center" scope="col">Ano</th>
                    <th class="col-2 text-start" scope="col">Modelo</th>
                    <th class="col-1 text-start" scope="col">Cor</th>
                    <th class="col-2 text-start" scope="col">Tipo</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-start">{{ item.placaCarro }}</td>
                    <td class="text-start">{{ item.ano }}</td>
                    <td class="text-start">{{ item.modelo }}</td>
                    <td class="text-start">{{ item.cor }}</td>
                    <td class="text-start">{{ item.tipo }}</td>
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
                { id: 1, placaCarro: 'ABC', ano: 2000, modelo: 'Corsa', cor: 'BRANCO', tipo: 'CARRO' },
                { id: 2, placaCarro: 'DEF', ano: 2001, modelo: 'Fiesta', cor: 'PRATA', tipo: 'CARRO' },
                { id: 3, placaCarro: 'GHI', ano: 2002, modelo: 'Uno', cor: 'PRETO', tipo: 'CARRO' },
                { id: 4, placaCarro: 'JKL', ano: 2003, modelo: 'Civic', cor: 'VERMELHO', tipo: 'CARRO' },
                { id: 5, placaCarro: 'MNO', ano: 2004, modelo: 'HB-20', cor: 'PRATA', tipo: 'CARRO' }
            
            ]
        };
    },
    // components: {
    //     VeiculoForm,
    // },
    methods: {
        cadastrarVeiculo() {
            console.log("ok");
        }
    }
}


</script>
<style scoped>

</style>