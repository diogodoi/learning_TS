import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement ;
    private inputQuantidade: HTMLInputElement ;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView',true);
    private mensagemView = new MensagemView('#mensagemView');
    
    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        //** const negociacaoTemp = new Negociacao(null,0,0);*/
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        //**Aceitando apenas dias úteis */
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
            .update('Apenas negociações em dias úteis são aceitas.')
            return;
        }
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
            
        

    }
/** 
    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
*/
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');

    }
    private ehDiaUtil(data:Date){
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO
    }
}
