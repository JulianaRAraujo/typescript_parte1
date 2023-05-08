import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 400);
console.log(negociacao.volume);
