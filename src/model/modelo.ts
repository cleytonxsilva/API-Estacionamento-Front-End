import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity{
    modelo! : String
    marca! : Marca[]
}