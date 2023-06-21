<template>
    <div class="condutor-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Condutores</h2>
        </div>
        <div class="col-3">
            <router-link to="/condutor-form">
                <button class="btn btn-success" type="button" @click="cadastrarCondutor">Cadastrar Condutor</button>
            </router-link>
        </div>
    </div>
        <div>
            <table class="table table-responsive table-dark table-hover table-bordered">
                <thead class="table-active">
                    <tr>
                        <th class="col-1" scope="col">Id</th>
                        <th class="col-2 text-start" scope="col">Nome do Condutor</th>
                        <th class="col-2" scope="col">CPF</th>
                        <th class="col-2" scope="col">Telefone</th>
                        <th class="col-1" scope="col">Tempo pago</th>
                        <th class="col-1" scope="col">Desconto acumulado</th>
                        <th class="col-3 text-center" scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td class="text-start">{{ item.nome }}</td>
                        <td>{{ item.cpf }}</td>
                        <td>{{ item.telefone }}</td>
                        <td>{{ item.tempoPago }}</td>
                        <td>{{ item.tempoDesconto }}</td>
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
import CondutorForm from './CondutorForm.vue';

export default {
    data() {
        return {
            items: [
                { id: 1, nome: 'Pedro', cpf: '123.456.789-00', telefone: '(12) 1234-5678', tempoPago: '10:00', tempoDesconto: '00:00' },
                { id: 2, nome: 'Jorge', cpf: '234.567.890-01', telefone: '(23) 5678-9011', tempoPago: '50:00', tempoDesconto: '01:00' },
                { id: 3, nome: 'Padre', cpf: '234.567.890-01', telefone: '(23) 5678-9011', tempoPago: '50:00', tempoDesconto: '01:00' },
                { id: 4, nome: 'João', cpf: '234.567.890-01', telefone: '(23) 5678-9011', tempoPago: '50:00', tempoDesconto: '01:00' },
                { id: 5, nome: 'Cleyton', cpf: '234.567.890-01', telefone: '(23) 5678-9011', tempoPago: '50:00', tempoDesconto: '01:00' }
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
<style scoped>

</style>