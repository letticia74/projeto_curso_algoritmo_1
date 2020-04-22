/*escreval ("Digite O nome do(a) aluno(a)")
   leia (nome)
   escreval ("Digite a primeira nota: ")
   leia (nota1)
   escreval ("Digite a segunda nota: ")
   leia (nota2)
   media := (nota1 + nota2) /2

   se media >=5 entao
      escreval("Aprovado(a)! ", nome)
   senao
        escreval("Reprovado(a)! ", nome)
   fimse
*/

 var nome, nota1, nota2, media;
nome = prompt("Digite o nome do aluno(a)")
nota1 = prompt("Digite a primeira nota: ")
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt (nota1) + parseInt(nota2)) /2;

if(media>= 5){
    alert("Aprovado(a)" + nome)
}
else
    alert("Reprovado(a)" +nome)