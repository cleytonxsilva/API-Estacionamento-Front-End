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
                    <th class="col-1" scope="col">Ativo</th>
                    <th class="col-3 text-start" scope="col">Nome do Condutor</th>
                    <th class="col-1" scope="col">CPF</th>
                    <th class="col-1" scope="col">Telefone</th>
                    <th class="col-1" scope="col">Tempo pago</th>
                    <th class="col-1" scope="col">Desconto acumulado</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in condutorListJS" :key="item.id">
                    <td scope="row">{{ item.id }}</td>
                    <td class="col-1 text-center">
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td class="text-start">{{ item.nomeCondutor }}</td>
                    <td>{{ item.cpf }}</td>
                    <td>{{ item.telefone }}</td>
                    <td>{{ item.tempoPago }}</td>
                    <td>{{ item.tempoDesconto }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-warning"
                                :to="{ name: 'condutor-form-editar-view', query: { id: item.id, form: 'editar' } }">
                                Editar
                            </router-link>
                            <router-link type="button" class="btn btn-danger"
                                :to="{ name: 'condutor-form-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                Excluir
                            </router-link>
                        </div>
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
            condutorList: new Array<Condutor>(),
            condutorListJS: [
                {id: 1, ativo: true, nomeCondutor: 'Dudu', cpf: '123', telefone: '45999999999', tempoPago: '00:00h', tempoDesconto: '00:00h'},
                {id: 2, ativo: false, nomeCondutor: 'XPTO', cpf: '456', telefone: '45999999998', tempoPago: '00:00h', tempoDesconto: '00:00h'
            }]
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