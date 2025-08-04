import { getSelecionado, getTabuleiro, seleciona } from "./discos.js";

    const eH1 = document.querySelector("h1");
    eH1.textContent="Mude as peças de lado";


    const eTabuleiro = criaTabuleiro();
    document.body.append(eTabuleiro);

    atualizaTabuleiro();
    function atualizaTabuleiro(){
        eTabuleiro.innerHTML="";
        const tabuleiro = getTabuleiro();
        for(let i=0; i<7; i++){
            const tabuleiro = getTabuleiro();
            const disco1 = criaDisco(tabuleiro[i], i);
            if(i === getSelecionado()){
                disco1.classList.add("selecionado");
            }
            eTabuleiro.append(disco1);
            disco1.addEventListener("click", cliqueDisco);
        }
    
    }

function cliqueDisco(evento){
    const posicao = Number(evento.target.dataset.posicao)

    console.log("Click! "+posicao);
    seleciona(posicao);
    atualizaTabuleiro();
}
    


    function criaTabuleiro(){
        const eTabuleiro = document.createElement("div");
        eTabuleiro.classList.add("tabuleiro");
        return eTabuleiro;

    }
    function criaDisco(cor, posicao){
            const novoDisco = document.createElement("div");
            novoDisco.classList.add("disco");
            novoDisco.dataset.cor = cor;
            novoDisco.dataset.posicao = posicao;
            return novoDisco;
    }