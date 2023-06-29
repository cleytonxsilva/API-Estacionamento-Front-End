<template>
    <div class="container">

        <div class="row">
            <div class="col-md12 text-center">
                <p class="fs-3"> Cadastro de Veículo</p>
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
                <label class="form-label">Veículo: *</label>
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="veiculo.placaCarro" placeholder="Placa do Veículo">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="modelo.id" placeholder="Id-Modelo">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="veiculo.anoCarro" placeholder="Ano do Veículo">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="veiculo.cor" placeholder="COR">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="veiculo.tipo" placeholder="CARRO/MOTO/VAN">
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-warning" to="/veiculo-lista">Voltar
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

import VeiculoClient from '@/client/VeiculoClient';
import { Modelo } from '@/model/Modelo';
import { Veiculo } from '@/model/Veiculo';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VeiculoForm',
    data() {
        return {

            veiculo: new Veiculo(),
            modelo : new Modelo(),
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
            this.veiculo.modelo = this.modelo
            VeiculoClient.cadastrar(this.veiculo)
                .then(sucess => {

                    this.veiculo = new Veiculo()
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
            VeiculoClient.findById(id)
                .then(sucess => {
                    this.veiculo = sucess
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            VeiculoClient.editar(this.veiculo.id, this.veiculo)
                .then(sucess => {
                    this.veiculo = new Veiculo()
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
            VeiculoClient.excluir(this.veiculo.id)
                .then(sucess => {
                    this.veiculo = new Veiculo()
                    this.$router.push({ name: 'veiculo-lista' });
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