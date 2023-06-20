<template>
    <div class="condutor-form">
        <form action="">
            <table class="table table-responsive table-dark table-hover">
                <div class="input-container">
                    <tbody class="">
                    <td>
                        <label for="nomeCondutor">Nome:</label>
                        <input type="text" id="nomeCondutor" name="nomeCondutor"><!---for="item in Condutor" :key="item.nomeCondutor"-->
                    </td>
                    <td>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf">
                    </td>
                    <td>
                        <label for="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone">
                    </td>
                    <td>
                        <label for="tempoPago">Tempo Pago:</label>
                        <input type="text" id="tempoPago" name="tempoPago">
                    </td>
                    <td>
                        <label for="tempoDesconto">Desconto Acumulado:</label>
                        <input type="text" id="tempoDesconto" name="tempoDesconto">
                    </td>
                    <input type="submit" class="submit-btn" value="Cadastrar">
                </tbody>
                </div>
            </table>
        </form>
    </div>
</template>

<script lang="ts">
import { Condutor } from '@/model/Condutor';

export default {
    name: "CondutorForm",
    data() {
        return {
            Condutor
        };
    }
}
</script>

<style scoped></style>