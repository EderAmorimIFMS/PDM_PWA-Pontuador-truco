let pontoEquipe1, pontoEquipe2, valortruco;
pontoEquipe1 = 0;
pontoEquipe2 = 0;
valortruco = 1;

/*lfunction Logar(){
  let input1 = document.getElementById("equipe1").value
  let input2 = document.getElementById("equipe2").value
  
  equipe_1.innerHTML = input1
  equipe_2.innerHTML = input2
  pontos_equipe1.innerHTML = 0
  pontos_equipe2.innerHTML = 0
}*/

function Ponto_equipe1(){
  if(pontos_equipe1 == 12){
     alert("Equipe/Jogador 2 Ganhoooooouuuu");
  } else{
    pontoEquipe1 += valortruco;
    document.getElementById("ponto_1").innerHTML = pontoEquipe1;
    valortruco = 1;
  }
}

function Ponto_equipe2(){
  if(pontos_equipe2 == 12){
      alert("Equipe/Jogador 2 Ganhoooooouuuu")
  } else {
    pontoEquipe2 += valortruco;
    document.getElementById("ponto_2").innerHTML = pontoEquipe2;
    valortruco = 1;
  }
}

function Retirar_equipe1(){
  pontoEquipe1 -= 1;
  document.getElementById("ponto_1").innerHTML = pontoEquipe1;
}

function Retirar_equipe2(){
  pontoEquipe2 -= 1;
    document.getElementById("ponto_2").innerHTML = pontoEquipe2;
}

function Trucar(){
  if(valorDoPonto == 1){
    valortruco = 3;
    document.getElementById("p_truco").innerHTML = valortruco;
  } else {
    valortruco += 3;
    document.getElementById("p_truco").innerHTML = valortruco;
  }
}