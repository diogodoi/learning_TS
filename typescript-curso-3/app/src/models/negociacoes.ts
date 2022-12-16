import { Negociacao } from './negociacao.js';
import { Modelo } from '../interfaces/modelo';

export class Negociacoes implements Modelo<Negociacoes>{

    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    public paraTexto():string{
        return JSON.stringify(this.negociacoes);
    }
    public eIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
        
    }
}
