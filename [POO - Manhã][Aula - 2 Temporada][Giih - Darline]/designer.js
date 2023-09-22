function desenharCards(container) {
    for(let i = 0; i < turma.listaDeAlunos.length; i++){
     container.innerHTML +=   `
        <div class='card'>
    
            <div class='cabecalho'>
                <div>
                    <h3 class='nome'>${turma.listaDeAlunos[i].getNome()}</h3>
                </div>
                <img class='logo' src='img/logoifal.png'/>
            </div>
        
            <div class='conteudo'>

                <div class='info'>
                    <div>
                        <p class='label'>Idade</p>
                        <p class='valor'>${turma.listaDeAlunos[i].getIdade()}</p>
                    </div>
                    <div>
                        <p class='label'>Matrícula</p>
                        <p class='valor'>${turma.listaDeAlunos[i].matricula}</p>
                    </div>
                </div>
            </div>
    
        </div>`
    }    
}
 