import { AbstractEntity } from "./AbstractEntity";
import { Marca } from "./Marca";

export class Modelo extends AbstractEntity{
    modelo! : string
    marca! : Marca[]
}