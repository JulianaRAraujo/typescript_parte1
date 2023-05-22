import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from '../views/mensagem.js';

export class Negociacaocontroller {

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;
    private negociacoes  = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor= document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
   
    }

    adicionar():void {
       const negociacao = this.criarNegociacao();
       if(negociacao.data.getDay() > 0 && negociacao.data.getDay() <6 ){
            this.negociacoes.adiciona(negociacao);
            this.negociacoesView.update(this.negociacoes);
            this.mensagemView.update('Negociação adicionada com sucesso.');
            this.limparFormulario();
       } else{
            this.mensagemView.update('Negociação poderá ser realizada somente em dias uteis');
       }
      
    
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