import { Negociacao } from "../models/negociacao";
import { Imprimivel } from './imprimivel.js';

export function imprimir(...objs:Imprimivel[]){
    for(let obj of objs){
        console.log(obj.paraTexto());
    }
}