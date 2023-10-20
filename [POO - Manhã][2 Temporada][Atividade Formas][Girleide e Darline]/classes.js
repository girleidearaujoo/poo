class Forma{
    constructor(cor){
        this.cor = cor
    }
    descrever(){
        console.log(`Essa forma tem a cor ${this.cor}`);
    }
}

class Quadrado extends Forma{
    constructor(cor, tamanhoDoLado){
        super(cor)
        this.tamanhoDoLado = tamanhoDoLado
    }
    calclcularArea(){
        return this.tamanhoDoLado ** 2 
    }
    descrever(){
        console.log(`Este quadrado é ${this.cor} e sua area é ${this.calclcularArea()}`);
    }
}

class Circulo extends Forma{
    constructor(cor, raio){
        super(cor)
        this.raio = raio
    }
    calclcularArea(){
        return  3.14 * this.raio  ** 2 
    }
    descrever(){
        console.log(`Este circulo é ${this.cor} e sua area é ${this.calclcularArea()}`);
    }
}