<template>
    <div class="container">

        <div class="row">
            <div class="col-md12 text-center">
                <p class="fs-3"> Cadastro de Movimentações</p>
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
                <label class="form-label">Movimentação: *</label>
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="veiculo.id" placeholder="Id-Veículo">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="condutor.id" placeholder="Id-Condutor">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.entrada" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.saida" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.tempo" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.tempoDesconto" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.tempoMulta" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.valorDesconto" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.valorMulta" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.valorTotal" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.valorHora" placeholder="Id-">
                <input type="text" :disabled="form === 'excluir'" class="form-control" v-model="movimentacao.valorHoraMulta" placeholder="Id-">
            
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-warning" to="/movimentacao-lista">Voltar
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

import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/Movimentacao';
import { Condutor } from '@/model/Condutor';
import { Veiculo } from '@/model/Veiculo';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovimentacaoForm',
    data() {
        return {
            
            movimentacao: new Movimentacao(),
            veiculo: new Veiculo(),
            condutor : new Condutor(),
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
           // this.veiculo.modelo = this.modelo
            
            MovimentacaoClient.cadastrar(this.movimentacao)
                .then(sucess => {

                    this.movimentacao = new Movimentacao()
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
            MovimentacaoClient.findById(id)
                .then(sucess => {
                    this.movimentacao = sucess
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
                .then(sucess => {
                    this.movimentacao = new Movimentacao()
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
            MovimentacaoClient.excluir(this.movimentacao.id)
                .then(sucess => {
                    this.movimentacao = new Movimentacao()
                    this.$router.push({ name: 'movimentacao-lista' });
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