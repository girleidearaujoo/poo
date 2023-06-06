class Celular {
    constructor(marca, modelo, ram, armazenamento, processador, qtdDeCameras, foto){
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.processador = processador;
        this.qtdDeCameras = qtdDeCameras;
        this.foto = foto
    }
}
class Tv{
    constructor(marca, modelo, tamanho, foto){
        this.marca = marca;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.foto = foto;
    }
        exibirNoHTML(){
        //Deixando vazio o conteúdo da tag com id 'produtos'
        document.getElementById('produtos').innerHTML = '';

        for (let i = 0; i < this.listaDeProdutos.length; i++) {

            document.getElementById('produtos').innerHTML += (`
            <div class='card'>
            
                <img class='foto' src='img/${this.listaDeProdutos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listaDeProdutos[i].modelo}</h3>
                    <p class='marca'>${this.listaDeProdutos[i].marca}</p>
                    
                    <span class='outros'>${this.listaDeProdutos[i].tamanho}</span>
                    <span class='outros'> polegadas</span>
                </div>
                <button onclick="">Remover</button>
            </div>
        `);
            
        }
    }
}
}
// oi david :)
