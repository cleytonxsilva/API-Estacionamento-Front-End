<template>
    <div class="marca-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Marcas</h2>
        </div>
        <div class="col-3">
            <router-link to="/marca-form">
                <button class="btn btn-success" type="button">Cadastrar Marca</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1" scope="col">Ativo</th>
                    <th class="col-8 text-start" scope="col">Marca</th>
                    <th class="col-3 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in marcaList" :key="item.id">
                    <td scope="row">{{ item.id }}</td>
                    <td class="col-1 text-center">
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td class="text-start">{{ item.marca }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-warning"
                                :to="{ name: 'marca-form-editar-view', query: { id: item.id, form: 'editar' } }">
                                Editar
                            </router-link>
                            <router-link type="button" class="btn btn-danger"
                                :to="{ name: 'marca-form-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
import MarcaClient from '@/client/MarcaClient';
import { Marca } from '@/model/Marca';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            marcaList: new Array<Marca>()
        }
    },

    mounted() {
        this.listaCompleta();
    },
    methods: {
        listaCompleta() {
            MarcaClient.listaCompleta()
                .then(sucess => {
                    this.marcaList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
</script>
<style scoped></style>