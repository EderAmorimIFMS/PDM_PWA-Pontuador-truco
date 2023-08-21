let equipe_1, equipe_2;
equipe_1 = document.getElementById("equipe_1");
equipe_2 = document.getElementById("equipe_2");

let pontos_equipe1, pontos_equipe2;
pontos_equipe1 = parseFloat(document.getElementById("ponto_1"));
pontos_equipe2 = parseFloat(document.getElementById("ponto_2"));

let valorDoPonto = document.getElementById("valorPonto");
valorPonto = 1;

function Logar(){
  let input1 = document.getElementById("equipe1").value
  let input2 = document.getElementById("equipe2").value
  
  equipe_1.innerHTML = equipe1
  equipe_2.innerHTML = equipe2
  pontos_equipe1.innerHTML = 0
  pontos_equipe2.innerHTML = 0
}

function Pontuar_equipe1(){
  if(pontos_equipe1 == 12){
    document.getElementById("vencedor1").innerHTML = "Ganhoooooouuuu";
  } else{
    pontos_equipe1.innerHTML += valorPonto;
  }
}

function Pontuar_equipe2(){
  if(pontos_equipe2 == 12){
    document.getElementById("vencedor2").innerHTML = "Ganhoooooouuuu"
  } else {
    pontos_equipe2.innerHTML += valorPonto;
  }
}

function Retirar_equipe1(){
  pontos_equipe1.innerHTML -= 1;
}

function Retirar_equipe2(){
  pontos_equipe2.innerHTML -= 1;
}

let onpress_truco = false

function Trucar(){
  onpress_truco = true
  valorDoPonto = 0
  
  if(onpress_truco == true){
    onpress_truco = false
    valorDoPonto += 3
    valorDoPonto.innerHTML 
  }
}