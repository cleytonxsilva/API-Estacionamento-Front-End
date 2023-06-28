<template>
    <div class="container">

        <div class="row">
            <div class="col-md12 text-center">
                <p class="fs-3"> Cadastro de Modelo</p>
            </div>
            <div class="col-md-2"></div>
        </div>

        <hr />

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Modelo: *</label>
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="modelo.modelo" placeholder="Modelo">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="marca.id" placeholder="Id-Marca">
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-warning" to="/modelo-lista">Voltar
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="d-grid gap-2">
                    <button v-if="form === undefined" type="button" class="btn btn-success" @click="onClickCadastrar()">
                        Cadastrar
                    </button>
                    <button v-if="form === 'editar'" type="button" class="btn btn-info" @click="onClickEditar()">
                        Editar
                    </button>
                    <button v-if="form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template >

<script lang="ts">

import ModeloClient from '@/client/ModeloClient';
import { Marca } from '@/model/Marca';
import { Modelo } from '@/model/Modelo';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModeloForm',
    data() {
        return {

            modelo: new Modelo(),
            marca : new Marca(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }


    },
    methods: {

        onClickCadastrar() {
            this.modelo.marca = this.marca
            ModeloClient.cadastrar(this.modelo)
                .then(sucess => {

                    this.modelo = new Modelo()
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabéns. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        findById(id: number) {
            ModeloClient.findById(id)
                .then(sucess => {
                    this.modelo = sucess
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            ModeloClient.editar(this.modelo.id, this.modelo)
                .then(sucess => {
                    this.modelo = new Modelo()
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickExcluir() {
            ModeloClient.excluir(this.modelo.id)
                .then(sucess => {
                    this.modelo = new Modelo()
                    this.$router.push({ name: 'modelo-lista' });
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
});

</script>