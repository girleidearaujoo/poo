var arrayComAsEmpresas = []

btn.addEventListener(()=>{
    for (const obj of meusEmpreendedores) {
      console.log(arrayComAsEmpresas);
      if (obj instanceof Veterinario) {
        arrayComAsEmpresas.push(obj)
      }  
    }
    chamarDesigner(arrayComAsEmpresas)
})

document.getElementById('baba').addEventListener(()=>{
    for (const obj of meusEmpreendedores) {
      if (obj instanceof Baba) {
        arrayComAsEmpresas.push(obj)
      }  
    }
    desenharEmpresasCards('container-cards', arrayComAsEmpresas)
})

document.getElementById('hotel').addEventListener(()=>{
    for (const obj of meusEmpreendedores) {
      if (obj instanceof Hotel) {
        arrayComAsEmpresas.push(obj)
      }  
    }
    desenharEmpresasCards('container-cards', arrayComAsEmpresas)
})
document.getElementById('petshop').addEventListener(()=>{
    for (const obj of meusEmpreendedores) {
      if (obj instanceof PetShop) {
        arrayComAsEmpresas.push(obj)
      }  
    }
    desenharEmpresasCards('container-cards', arrayComAsEmpresas)
})

function desenharEmpresasCards(idDoContainer, arrayComAsEmpresas){
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

function desenharCardDetalhes(idCard, arrayComAsEmpresas, idEmpresas, class_of){
    const empresas = arrayComAsEmpresas.find((empresas)=> empresas.id==idEmpresas && empresas instanceof class_of );
    console.log(arrayComAsEmpresas, empresas, idEmpresas);
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = 
    `<div class="card-expandido">
        <img class="avatar" src="img/${empresas.foto}.jpg">
        <div class="conteudo">
            <h2 class="titulo"> ${empresas.nome} </h2>
            <p class="descricao"> ${empresas.descricao}</p>
            <h2>${empresas.email}</h2>
        </div>
    </div>`;
}