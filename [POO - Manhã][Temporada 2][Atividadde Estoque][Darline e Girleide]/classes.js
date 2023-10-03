class Produto{
    constructor(descricao, precoUnitario, fabricante){
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    this.fabricante = fabricante
    }
}

class Estoque{
    constructor(){
        this.listaDeProdutos = [];
    }
    adicionarProduto(produto){
        if (produto instanceof Produto) {
            this.listaDeProdutos.push(produto)
        } else {
            console.error('A entrada não é da classe produto.')
        }
    }
    calcularValorTotal(){
        var soma = 0
        for (let i = 0; i < this.listaDeProduto.length; i++) {
            soma += this.listaDeProduto[i].precoUnitario * this.listaDeProdutos[i].quantidade
        }
        console.log(soma);
    }
}

class Celular extends Produto{
    constructor(descricao, precoUnitario, fabricante, armazenamento, ram, processador,tamanhoDaTela) {
        super(descricao, precoUnitario, fabricante)
        this.armazenamento = armazenamento
        this.ram = ram
        this.processador = processador
        this.tamanhoDaTela = tamanhoDaTela
    }
}

class CaixinhaDeSom extends Produto{
    constructor(descricao, precoUnitario, fabricante, potencia, temLed, dimensoes) {
        super(descricao, precoUnitario, fabricante)
        this.potencia = potencia
        this.temLed = temLed
        this.dimensoes = dimensoes
    }
}