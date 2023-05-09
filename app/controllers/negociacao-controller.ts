import { Negociacao } from "../models/negociacao.js";

export class Negociacaocontroller {

    private _inputData;
    private _inputQuantidade;
    private _inputValor;

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor= document.querySelector('#valor');

    }

    adicionar(){
        const negocioacao = new Negociacao(

            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        // event.preventDefault();
        console.log(negocioacao);
        
    }



}