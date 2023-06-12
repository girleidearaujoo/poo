class Passageiro {

    constructor(andarPretendido, peso) {

        this.andarPretendido = andarPretendido;
        this.peso = peso
    }

}

class Elevador {

    constructor(pesoMaximo) {

        this.andarAtual = 0;
        this.pesoMaximoSuportado = pesoMaximo;
        this.listaDePassageiros = [];
    }
    adicionarPassageiro(passageiro) {
        var peso = 0
       for (let i = 0; i < this.listaDePassageiros.length; i++) {
        peso += this.listaDePassageiros[i].peso
    }
    if (peso + passageiro.peso <= this.pesoMaximoSuportado) {
        this.listaDePassageiros.push(passageiro)
        console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarPretendido} ENTROU no elevador.\nAgora o elevador tem ${this.listaDePassageiros.length} passageiros.`);
    } else {
        console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this.pesoMaximoSuportado} kg`);
    }
    }
    movimentar(andarDeDestino) {
        var tam =
            this.andarAtual = andarDeDestino;
        console.log("=".repeat(60) + `\nMOVIMENTAÇÃO\nAgora o elevador está no ANDAR ${this.andarAtual}`);

        var j = 0;
        for (let i = this.listaDePassageiros.length - 1; i >= 0; i--) {
            if (this.listaDePassageiros[i].andarPretendido === this.andarAtual) {
                this.listaDePassageiros.splice(i, 1)
                j++
            }

        }

        if (j == 0) {
            console.log(`NENHUM passageiros SAÍRAM do elevador.\n${this.listaDePassageiros.length} passageiros CONTINUAM no elevador.`);
        } else {
            console.log(`${j} passageiros SAÍRAM do elevador.\n${this.listaDePassageiros.length} passageiros CONTINUAM no elevador.`);
        }
        console.log(this.listaDePassageiros);
    }
}



