var iptPreco = document.getGetElementById("iptPreco")
var iptDescricao = document.getGetElementById("iptDescricao")
var btnCadastrar = document.getGetElementById("btnCadastrar")


var estoque = new Estoque()

btnCadastrar.addEventListener('click', quantoClicarNoBotaoCadastrar)
function quantoClicarNoBotaoCadastrar(preco, descricao) {
    var obj = new Produto(descricao, preco)
    estoque.adicionarProduto(obj)
} 
