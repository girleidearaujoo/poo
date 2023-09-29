class Produto{
    constructor(descricao, precoUnitario){
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    }
}

class Estoque{
    constructor(){
        this.listaDeProdutos = [];
    }
    adicionarProduto(produto){
        this.listaDeProdutos.push(produto)
    }
}