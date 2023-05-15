import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class Negociacaocontroller {

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;
    private negociacoes  = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor= document.querySelector('#valor');
        this.negociacoesView.template();
        this.negociacoesView.update();
    }

    adicionar():void {
       const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    
    }

    criarNegociacao():Negociacao {

        const exp = /-/g;
        /*replace = substituir*/ 
        const date = new Date(this._inputData.value.replace(exp,','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date,quantidade,valor);

    }
    limparFormulario():void{
        this._inputData.value ='';
        this._inputQuantidade.value ='';
        this._inputValor.value = '';
        this._inputData.focus();
    }


}