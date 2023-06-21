<template>
    <div class="configuracao"></div>
    <div class="row">
        <div class="col-9 text-start">
            <h2>Configurações</h2>
        </div>
    </div>
    <div>
        <table class="table table-responsive table-dark table-hover table-bordered">
            <thead class="table-active">
                <tr>
                    <th class="col-1" scope="col">Id</th>
                    <th class="col-1 text-center" scope="col">Valor Hora</th>
                    <th class="col-1 text-center" scope="col">Valor Minuto Hora</th>
                    <th class="col-1 text-center" scope="col">Inicio Expediente</th>
                    <th class="col-1 text-center" scope="col">Fim Expediente</th>
                    <th class="col-1 text-center" scope="col">Tempo para Desconto</th>
                    <th class="col-1 text-center" scope="col">Tempo de Desconto</th>
                    <th class="col-1 text-center" scope="col">Gerar Desconto</th>
                    <th class="col-1 text-center" scope="col">Vagas Carro</th>
                    <th class="col-1 text-center" scope="col">Vagas Moto</th>
                    <th class="col-1 text-center" scope="col">Vagas Van</th>
                    <th class="col-2 text-center" scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td class="text-center">{{ item.valorHora }}</td>
                    <td class="text-center">{{ item.valorMinutoHora }}</td>
                    <td class="text-center">{{ item.inicioExpediente }}</td>
                    <td class="text-center">{{ item.fimExpediente }}</td>
                    <td class="text-center">{{ item.tempoParaDesconto }}</td>
                    <td class="text-center">{{ item.tempoDeDesconto }}</td>
                    <td class="text-center">{{ item.gerarDesconto }}</td>
                    <td class="text-center">{{ item.vagasCarro }}</td>
                    <td class="text-center">{{ item.vagasMoto }}</td>
                    <td class="text-center">{{ item.vagasVan }}</td>
                    <td>
                        <button class="btn btn-outline-warning">Editar</button>
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
                { id: 1, valorHora: 'R$ 10,00', valorMinutoHora: 'R$ 00,16', inicioExpediente: '08:00h', fimExpediente: '12:00h', tempoParaDesconto: '50:00h', tempoDeDesconto: '00:00h', gerarDesconto: 'Sim', vagasCarro: 60, vagasMoto: 10, vagasVan: 30},
            ]
        };
    },
}


</script>
<style scoped></style>