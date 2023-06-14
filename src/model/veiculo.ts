import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./cor";
import { Modelo } from "./modelo";
import { TipoVeiculo } from "./tipoveiculo";

export class Veiculo extends AbstractEntity{
    placaCarro! : String
    anoCarro! : number
    modelo! : Modelo[]
    cor! : Cor[]
    tipoVeiculo! : TipoVeiculo[]
}