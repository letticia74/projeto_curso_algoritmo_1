/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia (limite)
   contador := 0
   enquanto contador < limite faca
       escreva ("Digite o seu nome: ")
       leia (nome)
       escreva ("Digite a sua idade ", nome, ": ")
       leia (idade)
       se idade >= 18 entao
           escreval (nome, " você é maior de idade!")
       senao
           escreval (nome, " você é menor de idade!")
       fimse
       contador := contador + 1
   fimenquanto
Fimalgoritmo
*/

function acaoBotao() {
    var nome, idade, limite, contador;
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0 
    while(contador < limite){
        nome = prompt ("Digite o seu nome: ")
        idade = prompt ("Digite a sua idade " + nome)
        if ( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
        contador++   
    }

}