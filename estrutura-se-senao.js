/*
Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   //escreva ("A proposta desse programa é somar os dois valores baseado na operação da sua escolha. ")
   escreva ("Digite o primeiro valor: ")
   leia (valor1)
   escreva ("Digite a operação (Ex: + , - , * , /) : ")
   leia (operacao)
   escreva ("Digite o segundo valor: ")
   leia (valor2)
   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senao
        se operacao = "-" entao
            resultado := valor1 - valor2
        senao
             se operacao = "*" entao
               resultado := valor1 * valor2
             senao
                  se operacao = "/" entao
                  resultado := valor1 / valor2
                  fimse
             fimse
       fimse
   fimse
   escreva("Resultado do calculo é: ",resultado)
Fimalgoritmo
*/


function acaoBotao() {
    var valor1, valor2, resultado, operacao;
    valor1 = prompt ("Digite o primeiro valor: ")
    operacao = prompt ("Digite a operação (Ex: + , - , * , /) : ")
    valor2 = prompt ("Digite o segundo valor: ")
    
    if ( operacao == "+" ) {
        resultado = parseInt( valor1 ) + parseInt( valor2)
    }else if(operacao == "-"){
        resultado = parseInt( valor1 ) - parseInt( valor2)
    }
    else if(operacao == "*"){
        resultado = parseInt( valor1 ) * parseInt( valor2)
    }
    else if(operacao == "/"){
        resultado = parseInt( valor1 ) / parseInt( valor2)
    }
    
    document.getElementById("paragrafo").innerText = resultado    
}



























