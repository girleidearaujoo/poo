let inputPrimeiroNome = document.getElementById('iptPrimeiroNome');
let inputUltimoNome = document.getElementById('iptUltimoNome');
let inputDataDeNascimento = document.getElementById('iptDataDeNascimento');
let inputMatricula = document.getElementById('iptMatricula'); 
let buttonCadastrar = document.getElementById('btnCadastrar'); 

let containerCards = document.getElementById('containerCards')

buttonCadastrar.addEventListener('click', quandoClicarEmCadasrar)

let turma = new Turma()

function quandoClicarEmCadasrar() {
    let alunoTemp = new Aluno(
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputMatricula.value,
        inputDataDeNascimento.value

    );
     turma.adicionarAluno(alunoTemp)
     desenharCards(containerCards)
}