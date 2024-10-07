// Método 1 - Todos os requisitos

let vitoria = 105
let derrota = 0

    let resultado = vitoria - derrota
    let rank = ""

function calculoDeRank() {
        if (resultado < 10) {
            rank = "Ferro"
        } else if (resultado > 10 && resultado <= 20) {
            rank = "Bronze"
        } else if (resultado > 20 && resultado <= 50) {
            rank = "Prata"
        } else if (resultado > 50 && resultado <= 80) {
            rank = "Ouro"
        } else if (resultado > 80 && resultado <= 90) {
            rank = "Diamante"
        } else if (resultado > 90 && resultado <= 100) {
            rank = "Lendário"
        } else if (resultado > 100) {
            rank = "Imortal"
        }

console.log("O herói tem saldo de " + resultado + " vitórias" + " e está no nível " + rank)
    
}

calculoDeRank()
