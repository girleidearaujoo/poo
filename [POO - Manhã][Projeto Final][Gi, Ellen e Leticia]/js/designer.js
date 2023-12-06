function desenharEmpresasCards(idDoContainer, arrayComAsSeries){
    let containerCards = document.getElementById(idDoContainer);
    containerCards.innerHTML = ''; //Limpa o conteúdo do container

    for (const serie of arrayComAsSeries) {
        containerCards.innerHTML += `
            <div class="card">
                <img class="avatar" src="img/${serie.poster}">
                <div class="conteudo">
                    <h2 class="titulo"><a href='detalhe.html?id=${serie.id}'> ${serie.nome} </a></h2>
                    <p class="descricao"> ${serie.sinopse} </p>
                </div>
                <div class="barra-botoes">
                    <button>Editar</button>
                    <button class="material-symbols-outlined">Excluir</button>
                </div>
            </div>
        `;    
    }    
}

function desenharCardDetalhes(idCard, arrayComAsSeries, idSerie){
    const serie = arrayComAsSeries.find((serie)=> serie.id==idSerie );

    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = 
    `<div class="card-expandido">
        <img class="avatar" src="img/${serie.poster}">
        <div class="conteudo">
            <h2 class="titulo"> ${serie.nome} </h2>
            <p class="descricao"> ${serie.sinopse}</p>
        </div>
        <div class="barra-botoes">
            <button>Editar</button>
            <button>Excluir</button>
        </div>
    </div>`;
}