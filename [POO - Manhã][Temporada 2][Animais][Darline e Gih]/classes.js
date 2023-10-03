class Animal{
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log('RAWH');
    }
}

// =============================================================

class Cachorro extends Animal{
    constructor(nome){
        super(nome)
    }

    emitirSom(){
        console.log('Lobo proteje su loba, AUUUUUUUUUUUUUUUU')
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome)
    }

    emitirSom(){
        console.log('Miaaaaau');
    }
}

class Siames extends Gato{
    constructor(nome, cor='cinza'){
        super(nome)
        this.cor = cor
    }

    emitirSom(){
        console.log('Minhauuunnnn');
    }

    emitirSom(vocativo = ''){
        console.log(`INHÉEEEEU ${vocativo}`)
    }
}

