class Player{
    constructor(nome, qtdLados, raio, cor, ataque, velocidadeMaxDoTiro){
        this.nome = nome;
        this.raio = raio;
        this.qtdLados = qtdLados;
        this.cor = cor;
        this.ataque = ataque;
        this.bala = new Bala(ataque, cor);
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro;
        this.vida = 100;
    }

//     atacar(oponente){
//         if(oponente instanceof Player){
//             oponente.sofrerDano(this.ataque);
//             console.log(`${oponente.nome} foi atacado(a) por: ${this.nome} Vida de ${oponente.nome}:${oponente.vida}`);
//         }
       
//     }
//     sofrerDano(ataqueDoOponente){
//         this.vida = this.vida - ataqueDoOponente;
//         if (this.vida <= 0){
//             console.error(`${this.nome} morreu.`);
//             }
//     }    
}

class Bala{
    constructor(raio, cor){
        this.raio = raio
        this.cor = cor
    }
}

class GerenciadorDeDuelo{
    constructor(player1, player2, player3, player4){
        this.player1 = player1
        this.player2 = player2
        this.player3 = player3
        this.player4 = player4
    }
    getLadoPlayer1(){
        return "esquerda"
    }
    getLadoPlayer3(){
        return "esquerda2"
    }
    getLadoPlayer4(){
        return "direita2"
    }
    getLadoPlayer2(){
        return "direita"
    }
}