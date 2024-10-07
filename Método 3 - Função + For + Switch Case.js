//Método 3 - Função + For + Switch Case

let vitorias = 9
let derrotas = 0
let saldoPartidas = vitorias - derrotas
let rank = ''

function calculandoRank() {
    for (i = 0; i <= saldoPartidas; i++) {
        switch (true) {
            case (i < 10):
                rank = "Ferro"
                break;
            case (i > 10 && i <= 20):
                rank = "Bronze"
                break;
            case (i > 20 && i <= 50):
                rank = "Prata"
                break;
            case (i > 50 && i <= 80):
                rank = "Ouro"
                break;
            case (i > 80 && i <= 90):
                rank = "Diamante"
                break;
            case (i > 90 && i <= 100):
                rank = "Lendário"
                break;
            default:
                rank = "Imortal"
            }
    }

console.log("O herói tem saldo de " + saldoPartidas + " vitórias, e está no nível " + rank + ".")
    
}

calculandoRank()
    