const operacoes = new Object();

operacoes.adicao = (a,b) => {return a + b;}

operacoes.subtracao = (a,b) => {return a - b;}

operacoes.multiplicacao = (a,b) => {return a * b;}

operacoes.divisao = (a,b) => {
    if (b === 0){
        return "Erro : Divisão por zero!";
    }
    return a / b;
}

module.exports = operacoes;