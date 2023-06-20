<template>
    <div class="condutor-lista"></div>
    <div class="">
        <div>
            <router-link to="/condutor-form">
                <button class="btn btn-secondary" type="button" @click="cadastrarCondutor">Cadastrar novo Condutor</button>
            </router-link>
        </div>
        <div>
            <table class="table table-responsive table-dark table-hover table-bordered">
                <thead class="table-active">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome do Condutor</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Tempo pago</th>
                        <th scope="col">Desconto acumulado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.nome }}</td>
                        <td>{{ item.cpf }}</td>
                        <td>{{ item.telefone }}</td>
                        <td>{{ item.tempoPago }}</td>
                        <td>{{ item.tempoDesconto }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
import CondutorForm from './CondutorForm.vue';

export default {
    data() {
        return {
            items: [
                { id: 1, nome: 'Pedro', cpf: '123.456.789-00', telefone: '(12) 1234-5678', tempoPago: '10:00', tempoDesconto: '00:00' },
                { id: 2, nome: 'Padre', cpf: '234.567.890-01', telefone: '(23) 5678-9011', tempoPago: '50:00', tempoDesconto: '01:00' },
                { id: 3, nome: 'Paulo', cpf: '345.567.890-11', telefone: '(34) 9101-1213', tempoPago: '100:00', tempoDesconto: '02:00' }
            ]
        };
    },
    components: {
        CondutorForm,
    },
    methods: {
        cadastrarCondutor() {
            console.log("ok");
        }
    }
}
</script>
<style>
main {
    display: flex;
    flex-direction: row;
}
</style>