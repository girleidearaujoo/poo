const params = new URLSearchParams(window.location.search);
const id = params.get('id');

desenharCardDetalhes('cardDetalhe', meusEmpreendedores, id);