const logar = document.getElementById("logar");
logar.addEventListener("click", () => {
    const equipe1 = document.getElementById("equipe1");
    const equipe2 = document.getElementById("equipe2");

    const jogador1 = document.getElementById("jogador1")
    const jogador2 = document.getElementById("jogador2")

    jogador1.innerHTML = equipe1.value
    jogador2.innerHTML = equipe2.value
});

const pontuar1_j1 = document.getElementById("pontuar1");
const retirar1_j1 = document.getElementById("retirar1");
const ponto1 =  document.getElementById("ponto1");

pontuar1_j1.addEventListener("click", () => {
    
});

retirar1_j1.addEventListener("click",() => {
    
});


const pontuar1_j2 =  document.getElementById("pontuar2");
const retirar1_j2 =  document.getElementById("retirar2");
const ponto2 = document.getElementById("ponto2");

pontuar1_j2.addEventListener("click", () => {
    
});

retirar1_j2.addEventListener("click", () => {
    
});












//elemento.removeEventListener("evento", manipulador(função));
