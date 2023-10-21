class Player{
    constructor(nome, raio, qtdLados, cor, ataque, bala, velocidadeMaxDoTiro){
        this.nome = nome;
        this.raio = raio;
        this.qtdLados = qtdLados;
        this.cor = cor;
        this.ataque = ataque;
        this.bala = bala;
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

