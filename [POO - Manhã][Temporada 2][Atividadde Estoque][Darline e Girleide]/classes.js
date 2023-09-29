class Produto{
    constructor(descricao, precoUnitario, quantidade){
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    this.quantidade = quantidade
    }
}

class Estoque{
    constructor(){
        this.listaDeProdutos = [];
    }
    adicionarProduto(produto){
        this.listaDeProdutos.push(produto)
    }
    calcularValorTotal(){
        var soma = 0
        for (let i = 0; i < this.listaDeProduto.length; i++) {
            soma += this.listaDeProduto[i].precoUnitario * this.listaDeProdutos[i].quantidade
        }
        console.log(soma);
    }
}
