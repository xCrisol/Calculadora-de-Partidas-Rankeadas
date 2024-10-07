//Método 2 - Função + vetor 

let vitorias = 9
let derrotas = 0

let saldoDeVitorias = vitorias - derrotas 

let rank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function calculoDeRank() {
    let rankIndex = 0

    if (saldoDeVitorias < 10) {
        rankIndex = 0
    } else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
        rankIndex = 1
    } else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
        rankIndex = 2
    } else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
        rankIndex = 3
    } else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
        rankIndex = 4
    } else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
        rankIndex = 5
    } else {
        rankIndex = 6
    }
    
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias." + " e está no nível " + rank[rankIndex] + ".")
}

calculoDeRank()

