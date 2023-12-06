const params = new URLSearchParams(window.location.search);
const idSerie = params.get('id');

desenharCardDetalhes('cardDetalhe', minhasSeriesDuvidosas, idSerie);