<template>
    <div class="modelo-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Modelos</h2>
        </div>
        <div class="col-3">
            <router-link to="/modelo-form">
                <button class="btn btn-success" type="button">Cadastrar Modelo</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1" scope="col">Ativo</th>
                    <th class="col-8 text-start" scope="col">Modelo</th>
                    <th class="col-8 text-start" scope="col">Marca</th>
                    <th class="col-3 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in modeloList" :key="item.id">
                    <td scope="row">{{ item.id }}</td>
                    <td class="col-1 text-center">
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td class="text-start">{{ item.modelo }}</td>
                    <td class="text-start">{{ item.marca.marca }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-warning"
                                :to="{ name: 'modelo-form-editar-view', query: { id: item.id, form: 'editar' } }">
                                Editar
                            </router-link>
                            <router-link type="button" class="btn btn-danger"
                                :to="{ name: 'modelo-form-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
import ModeloClient from '@/client/ModeloClient';
import { Modelo } from '@/model/Modelo';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            modeloList: new Array<Modelo>()
        }
    },

    mounted() {
        this.listaCompleta();
    },
    methods: {
        listaCompleta() {
            ModeloClient.listaCompleta()
                .then(sucess => {
                    this.modeloList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
</script>
<style scoped></style>