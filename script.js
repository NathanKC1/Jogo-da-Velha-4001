let jogador = "X"

function marcar(td) {
    if (td.innerHTML != ""){
    return
    }
    
    td.innerHTML = jogador

    if (jogador == "X") {
        jogador = "O"

    } else {
        jogador = "X"

    }
}