<template>
    <div class="movimentacao-lista"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Movimentações</h2>
        </div>
        <div class="col-3">
            <router-link to="/movimentacao-form">
                <button class="btn btn-success" type="button" @click="cadastrarMovimentacao">Cadastrar Movimentação</button>
            </router-link>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1 text-start" scope="col">Placa</th>
                    <th class="col-2 text-center" scope="col">Condutor</th>
                    <th class="col-1 text-center" scope="col">Entrada</th>
                    <th class="col-1 text-center" scope="col">Saída</th>
                    <th class="col-1 text-center" scope="col">Valor Multa</th>
                    <th class="col-1 text-center" scope="col">Valor Hora</th>
                    <th class="col-1 text-center" scope="col">Valor Hora/Multa</th>
                    <th class="col-1 text-center" scope="col">Valor de Desconto</th>
                    <th class="col-1 text-center" scope="col">Valor Total</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-start">{{ item.placaCarro }}</td>
                    <td class="text-start">{{ item.condutor }}</td>
                    <td class="text-center">{{ item.entrada }}</td>
                    <td class="text-center">{{ item.saida }}</td>
                    <td class="text-center">{{ item.valorMulta }}</td>
                    <td class="text-center">{{ item.valorHora }}</td>
                    <td class="text-center">{{ item.valorHoraMulta }}</td>
                    <td class="text-center">{{ item.valorDesconto }}</td>
                    <td class="text-center">{{ item.valorTotal }}</td>
                    <td>
                        <button class="btn btn-outline-warning">Editar</button>
                        <button class="btn btn-outline-danger">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-2 text-center" scope="col">Tempo Estacionado</th>
                    <th class="col-2 text-center" scope="col">Desconto Acumulado</th>
                    <th class="col-2 text-center" scope="col">Tempo da Multa</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-center">{{ item.tempoEstacionado }}</td>
                    <td class="text-center">{{ item.tempoDesconto }}</td>
                    <td class="text-center">{{ item.tempoMulta }}</td>
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

export default {
    data() {
        return {
            items: [
                { id: 1, placaCarro: 'ABC-1234', condutor: 'Cleyton', entrada: '08:00h', saida: '12:00h', tempoEstacionado: '04:00h', tempoDesconto: '00:00h', tempoMulta: '00:00h', valorMulta: 'R$ 00,00', valorHora: 'R$ 10,00', valorHoraMulta: 'R$ 05,00', valorDesconto: 'R$ 00,00', valorTotal: 'R$ 40,00' },
            ]
        };
    },
    // components: {
    //     MovimentacaoForm,
    // },
    methods: {
        cadastrarMovimentacao() {
            console.log("ok");
        }
    }
}


</script>
<style scoped></style>