<template>
    <div class="condutor-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Condutores</h2>
        </div>
        <div class="col-3">
            <router-link to="/condutor-form">
                <button class="btn btn-success" type="button">Cadastrar Condutor</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-3 text-start" scope="col">Nome do Condutor</th>
                    <th class="col-1" scope="col">CPF</th>
                    <th class="col-1" scope="col">Telefone</th>
                    <th class="col-1" scope="col">Tempo pago</th>
                    <th class="col-1" scope="col">Desconto acumulado</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in condutorList" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-start">{{ item.nomeCondutor }}</td>
                    <td>{{ item.cpf }}</td>
                    <td>{{ item.telefone }}</td>
                    <td>{{ item.tempoPago }}</td>
                    <td>{{ item.tempoDesconto }}</td>
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
import { Condutor } from '@/model/Condutor';
import CondutorClient from '@/client/CondutorClient';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            condutorList: new Array<Condutor>()
        }
    },

    mounted() {
        this.listaCompleta();
    },
    methods: {
        listaCompleta() {
            CondutorClient.listaCompleta()
                .then(sucess => {
                    this.condutorList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
</script>
<style scoped></style>