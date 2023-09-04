let a2 = new Aluno("Darline", "2 ano", "8947152AL", 17, 'https://drive.google.com/file/d/1mGY2Y1oyIks5f7OvgCtd5lEysC5oe1uX')
let a3 = new Aluno("Jaciane", "2 ano", "3326453AL", 16, 'https://drive.google.com/file/d/1d5oA9rmApqBH6Mt3n75Dto7bETmuus6x')
let a4 = new Aluno("Girleide", "2 ano", "098635AL", 17, 'https://drive.google.com/file/d/1D0tK367ziUWFUs2PgIVZKbTHEuiPV43r')
let a5 = new Aluno("Thiago", "2 ano", "92863AL", 16, 'https://drive.google.com/file/d/1yK1BWGSRxuHt4gP6mmYNOIRHs4plJ8gR')
let a6 = new Aluno("Kemylly", "2 ano", "28364AL", 17, 'https://drive.google.com/file/d/1uWL4Z7JRW478UM_pObd4dGNp--USG5or')
let a7 = new Aluno("Ellen", "2 ano", "0292827AL", 16, 'https://drive.google.com/file/d/1xkGio1rSh25XTFnKAHcwXXsFliwU22HQ')
let a8 = new Aluno("Thayslane", "2 ano", "36436AL", 17, 'https://drive.google.com/file/d/1kQcfoPxzC3k0Jje8t6Qwo8we7JQhsdvR')
let a9 = new Aluno("Catarina", "2 ano", "376253AL", 16, 'https://drive.google.com/file/d/1tCJ1hVCp7445_lj-Dj4LZ0yOaTAfxwA2')
let a10 = new Aluno("Rebeca", "2 ano", "297373AL", 16, 'https://drive.google.com/file/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0')
let a11 = new Aluno("Helysson", "2 ano", "3736552AL", 17, 'https://drive.google.com/file/d/1IVyT8vEVgMC7UoKOcgqo3Nol9tBSmSLs')


let listaDeAlunos = [a2, a3, a4, a5, a6, a7, a8, a9 ,a10, a11]

listaDeAlunos.sort((a, b) => {
    if (a.nome[0] > b.nome[0]) {
        return 1
    } else if (a.nome[0] < b.nome[0]){
        return -1
    } else {
        return 0
    }
})

for(let i = 0; i < listaDeAlunos.length; i++){
    document.write(`
    <div class='card'>

        <div class='cabecalho'>
            <div>
                <p class='turma'>${listaDeAlunos[i].turma}</p>
                <h3 class='nome'>${listaDeAlunos[i].nome}</h3>
            </div>
            <img class='logo' src='img/logoifal.png'/>
        </div>
    
        <div class='conteudo'>
            <img class='foto' src='${listaDeAlunos[i].foto.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com')}'>
            <div class='info'>
                <div>
                    <p class='label'>Idade</p>
                    <p class='valor'>${listaDeAlunos[i].idade}</p>
                </div>
                <div>
                    <p class='label'>Matrícula</p>
                    <p class='valor'>${listaDeAlunos[i].matricula}</p>
                </div>
            </div>
        </div>

    </div>`)
}
