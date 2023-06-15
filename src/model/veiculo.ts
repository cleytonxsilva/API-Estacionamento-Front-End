import { AbstractEntity } from "./AbstractEntity";
import { Cor } from "./Cor";
import { Modelo } from "./Modelo";
import { TipoVeiculo } from "./TipoVeiculo";

export class Veiculo extends AbstractEntity{
    placaCarro! : String
    anoCarro! : number
    modelo! : Modelo[]
    cor! : Cor[]
    tipoVeiculo! : TipoVeiculo[]
}