const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const btn_vet = document.getElementById('vet')
const btn_baba = document.getElementById('baba')
const btn_hotel = document.getElementById('hotel')
const btn_petshop = document.getElementById('petshop')

btn_vet.addEventListener("click",  desenharEmpresasCards())
desenharCardDetalhes('cardDetalhe', meusEmpreendedores, id);