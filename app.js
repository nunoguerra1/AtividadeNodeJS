const calculadora = require("./operacoes.js");

console.log(calculadora.adicao(8, 4));

console.log(calculadora.subtracao(15, 7));

console.log(calculadora.multiplicacao(6, 3));

console.log(calculadora.divisao(20, 5));

console.log(calculadora.divisao(10, 0));

const _ = require("lodash");

const numero = _.random(1, 30);

console.log("Numero aleatório : " +numero);