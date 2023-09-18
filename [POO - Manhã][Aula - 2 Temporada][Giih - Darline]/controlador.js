let inputTurma = document.getElementById('iptTurma');
let inputPrimeiroNome = document.getElementById('iptPrimeiroNome');
let inputUltimoNome = document.getElementById('iptUltimoNome');
let inputDataDeNascimento = document.getElementById('iptDataDeNascimento');
let inputMatricula = document.getElementById('iptMatricula'); 
let buttonCadastrar = document.getElementById('btnCadastrar'); 

let containerDeCards = document.getElementById('containerCards')

buttonCadastrar.addEventListener('click', quandoClicarEmCadasrar)
function quandoClicarEmCadasrar() {
    let alunoTemp = new Aluno(
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputTurma.value,
        inputMatricula.value,
        inputDataDeNascimento.value

    );
     listaDeAlunos.push(alunoTemp)
     desenharCards(containerDeCards)
     console.log(listaDeAlunos);
}