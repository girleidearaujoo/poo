let a2 = new Aluno("Darline", "2 ano", "8947152AL", 17, 'https://drive.google.com/file/d/1mGY2Y1oyIks5f7OvgCtd5lEysC5oe1uX')
let a3 = new Aluno("Girleide", "2 ano", "3326453AL", 16, 'https://drive.google.com/file/d/1D0tK367ziUWFUs2PgIVZKbTHEuiPV43r')

let listaDeAlunos = []
listaDeAlunos.push(a2);
listaDeAlunos.push(a3);

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
