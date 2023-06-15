import { AbstractEntity } from "./AbstractEntity";

export class Condutor extends AbstractEntity{
    nomeCondutor! : String
    cpf! : String
    telefone! : String
    tempoPago! : number
    tempoDesconto! : number

    constructor() {
        super()
        this.ativo = true
    }
}