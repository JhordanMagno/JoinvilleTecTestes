// app.js
var Pessoa = require("./commons/pessoa");
var { soma, subtracao, divisao, multiplicacao } = require("./commons/Soma");

var jhordan = Pessoa();
console.log(JSON.stringify(jhordan));

// Realizando operações
console.log("Soma: ", soma(2, 2));
console.log("Subtração: ", subtracao(5, 3));
console.log("Divisão: ", divisao(10, 2));
console.log("Multiplicação: ", multiplicacao(3, 4));
