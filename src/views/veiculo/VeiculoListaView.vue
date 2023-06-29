<template>
    <div class="veiculo-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Veiculos</h2>
        </div>
        <div class="col-3">
            <router-link to="/veiculo-form">
                <button class="btn btn-success" type="button">Cadastrar Veiculo</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1" scope="col">Ativo</th>
                    <th class="col-8 text-start" scope="col">Placa</th>
                    <th class="col-8 text-start" scope="col">Ano</th>
                    <th class="col-8 text-start" scope="col">Modelo</th>
                    <th class="col-8 text-start" scope="col">Cor</th>
                    <th class="col-8 text-start" scope="col">Tipo</th>
                    <th class="col-3 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in veiculoList" :key="item.id">
                    <td scope="row">{{ item.id }}</td>
                    <td class="col-1 text-center">
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td class="text-start">{{ item.placaCarro }}</td>
                    <td class="text-start">{{ item.anoCarro }}</td>
                    <td class="text-start">{{ item.modelo.modelo }}</td>
                    <td class="text-start">{{ item.cor }}</td>
                    <td class="text-start">{{ item.tipo }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-warning"
                                :to="{ name: 'veiculo-form-editar-view', query: { id: item.id, form: 'editar' } }">
                                Editar
                            </router-link>
                            <router-link type="button" class="btn btn-danger"
                                :to="{ name: 'veiculo-form-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
import VeiculoClient from '@/client/VeiculoClient';
import { Veiculo } from '@/model/Veiculo';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            veiculoList: new Array<Veiculo>()
        }
    },

    mounted() {
        this.listaCompleta();
    },
    methods: {
        listaCompleta() {
            VeiculoClient.listaCompleta()
                .then(sucess => {
                    this.veiculoList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
</script>
<style scoped></style>