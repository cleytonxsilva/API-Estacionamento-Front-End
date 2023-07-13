<template>
    <div class="movimentacao-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Movimentações</h2>
        </div>
        <div class="col-3">
            <router-link to="/movimentacao-form">
                <button class="btn btn-success" type="button">Cadastrar Movimentação</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1" scope="col">Ativo</th>
                    <th class="col-1 text-start" scope="col">Placa</th>
                    <th class="col-2 text-start" scope="col">Nome do Condutor</th>
                    <th class="col-1 text-center" scope="col">Entrada</th>
                    <!-- <th class="col-1 text-center" scope="col">Saída</th>
                    <th class="col-1 text-center" scope="col">Valor Multa</th>
                    <th class="col-1 text-center" scope="col">Valor Hora</th>
                    <th class="col-1 text-center" scope="col">Valor Hora/Multa</th>
                    <th class="col-1 text-center" scope="col">Valor de Desconto</th>
                    <th class="col-1 text-center" scope="col">Valor Total</th>
                    <th class="col-2 text-center" scope="col">Desconto Acumulado</th>
                    <th class="col-2 text-center" scope="col">Tempo da Multa</th> -->
                    <th class="col-2 text-center" scope="col">Tempo Estacionado</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in movimentacaoList" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="col-1 text-center">
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td class="text-start">{{ item.veiculo.placaCarro}}</td>
                    <td class="text-start">{{ item.condutor.nomeCondutor }}</td>
                    <td class="text-center">{{ item.entrada }}</td> <!--Formatar data-->
                    <!-- <td class="text-center">{{ item.saida }}</td> 
                    <td class="text-center">{{ item.valorMulta }}</td>
                    <td class="text-center">{{ item.valorHora }}</td>
                    <td class="text-center">{{ item.valorHoraMulta }}</td>
                    <td class="text-center">{{ item.valorDesconto }}</td>
                    <td class="text-center">{{ item.valorTotal }}</td>
                    <td class="text-center">{{ item.tempoDesconto }}</td>
                    <td class="text-center">{{ item.tempoMulta }}</td> -->
                    <td class="text-center">{{ item.tempo }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-warning"
                                :to="{ name: 'movimentacao-form-editar-view', query: { id: item.id, form: 'editar' } }">
                                Editar
                            </router-link>
                            <router-link type="button" class="btn btn-danger"
                                :to="{ name: 'movimentacao-form-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/Movimentacao';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            movimentacaoList: new Array<Movimentacao>()
        }
    },

    mounted() {
        this.listaCompleta();
    },
    methods: {
        listaCompleta() {
            MovimentacaoClient.listaCompleta()
                .then(sucess => {
                    this.movimentacaoList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


});

</script>
<style scoped></style>