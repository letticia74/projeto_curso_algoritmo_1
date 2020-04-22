/* 
   passou := falso
   escreval ("Digite O nome do(a) aluno(a)")
   leia (nome)
   escreval ("Digite a primeira nota: ")
   leia (nota1)
   escreval ("Digite a segunda nota: ")
   leia (nota2)
   media := (nota1 + nota2) /2

   se media >=50 entao
     passou := verdadeiro
   fimse
   
   se ( passou ) && ( media >=50 || media <=70) entao
      escreval("Aprovado!", nome)
   senao
        escreval("Reprovado!", nome)
   fimse

Fimalgoritmo 
*/

var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno(a)")
nota1 = prompt("Digite a primeira nota: ")
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt (nota1) + parseInt(nota2)) /2;

if(media>= 50)
    passou = true;


if(passou && (media >= 70 && media <= 90))
    alert("Aprovado(a)" + nome)
else
    alert("Reprovado(a)" +nome)