const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];

let selecionado = null;

export function getSelecionado(){
    return selecionado;
}

export function seleciona(posicao){
    if(selecionado === null) {
        selecionado = posicao;
    } else{
        if(selecionado === posicao){
            selecionado = null;
        } else {
            mover(selecionado, posicao);
            selecionado = null;
        }
    }
}

export function getTabuleiro(){
    return [...tabuleiro];
}

function mover(origem, destino){
    console.log(`Movendo de ${origem} para ${destino}`)
    if(tabuleiro[origem]==='') return;
    if(tabuleiro[destino]!=='') return;
    if(Math.abs(destino - origem)===1){
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
    }
    if(destino - origem===2 && tabuleiro[origem+1] !== ""){
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
            
        }        
    if(destino - origem===-2 && tabuleiro[origem-1] !== ""){
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
            
        }    
    }