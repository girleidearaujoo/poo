
function desenharEmpresasCards(idDoContainer, arrayComAsEmpresas){
    console.log(arrayComAsEmpresas);
    let containerCards = document.getElementById(idDoContainer);
    containerCards.innerHTML = ''; //Limpa o conteúdo do container
    console.log(arrayComAsEmpresas);
    for (const empresas of arrayComAsEmpresas) {
        console.log(empresas.foto);
        containerCards.innerHTML += `
            <div class="card">

                <div class="conteudo">
                    <h2 class="titulo"><a href='detalhe.html?id=${empresas.id}'> ${empresas.nome} </a></h2>
                    <p class="descricao"> ${empresas.descricao} </p>
                    <p class="descricao"> ${empresas.telefone} </p>
                </div>
            </div>
        `;    
    }    
}

function desenharCardDetalhes(idCard, arrayComAsEmpresas, idEmpresas){
    const empresas = arrayComAsEmpresas.find((empresas)=> empresas.id==idEmpresas);
    console.log(arrayComAsEmpresas, empresas, idEmpresas);
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = 
    `<div class="card-expandido">
        <img class="avatar" src="img/${empresas.foto}.jpg">
        <div class="conteudo">
            <h2 class="titulo"> ${empresas.nome} </h2>
            <p class="descricao"> ${empresas.descricao}</p>
            <h3>${empresas.email}</h3>
        </div>
    </div>`;
}