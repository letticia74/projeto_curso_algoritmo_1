/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor1, valor2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   repita
         escreva ("Digite o primeiro valor: ")
         leia (valor1)
         escreva ("Digite o segundo valor: ")
         leia (valor2)
         escreval ("resultado: ", valor1 + valor2)
         escreval ("Deseja sair ? S/N")
         leia (sairLoop)
   ate sairLoop <> "N"

Fimalgoritmo
*/

function acaoBotao() {
    var sairLoop, valor1, valor2;
    do{
         valor1 = prompt ("Digite o primeiro valor: ")
         valor2 = prompt ("Digite o segundo valor: ")
         document.getElementById("paragrafo").innerText = "resultado: " + ( parseInt( valor1 ) + parseInt( valor2 ))
         sairLoop = prompt ("Deseja sair ? S/N")
    } while(sairLoop == "N") 

}

