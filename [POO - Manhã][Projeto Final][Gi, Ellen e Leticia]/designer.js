function desenharEmpresasCards(idDoContainer, arrayComAsEmpresas) {
    let containerCards = document.getElementById(idDoContainer);
    containerCards.innerHTML = ''
    for ( const empresas of arrayComAsEmpresas){
        containerCards.innerHTML += `
        <div class = "card">
            <img class="avatar" src = "img/${empresas.foto}">
            <div class ="conteudo">
                <h2 class="titulo"> ${empresas.nome} </h2>
                <p class="descricao"> ${empresas.descricao} </p>
            </div>
            <div class="barra-botoes">
                <button>Editar</button>
                <button class="material-symbols-outlined">Excluir</button>
            </div>
        </div>
        `;
    }
}
