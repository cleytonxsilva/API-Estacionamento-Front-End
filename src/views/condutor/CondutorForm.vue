<template>
    <div class="condutor-form">
        <form>
            <div class="mb-3">
                <label for="nomeCondutor" class="form-label">Nome:</label>
                <input type="text" id="nomeCondutor" name="nomeCondutor" class="form-control w-25">
            </div>
            <div class="mb-3">
                <label for="cpf" class="form-label">CPF:</label>
                <input type="text" id="cpf" name="cpf" class="form-control w-25">
            </div>
            <div class="mb-3">
                <label for="telefone" class="form-label">Telefone:</label>
                <input type="text" id="telefone" name="telefone" class="form-control w-25">
            </div>
            <div class="mb-3">

                <label for="tempoPago" class="form-label">Tempo Pago:</label>
                <input type="text" id="tempoPago" name="tempoPago" class="form-control w-25">
            </div>
            <div class="mb-3">
                <label for="tempoDesconto" class="form-label">Desconto Acumulado:</label>
                <input type="text" id="tempoDesconto" name="tempoDesconto" class="form-control w-25">
            </div>
            <button type="submit" class="btn btn-warning">Cadastrar</button>
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

<style scoped>
/* .condutor-form{

} */
</style>