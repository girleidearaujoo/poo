var aluno1 = new Aluno('Jubisclaudio', 12, '012345')
var aluno2 = new Aluno('Jubiscleia', 14, '678910')
var aluno3 = new Aluno('Toninho do Grau', 16, '121314')

let listaDeAlunos = []
listaDeAlunos.push(aluno1, aluno2, aluno3)

for (let i = 0; i < listaDeAlunos.length; i++) {
    console.table(listaDeAlunos[i]);
}

for (let i = 0; i < listaDeAlunos.length; i++) {
    document.write(`
    <div>
    <div>${listaDeAlunos[i].nome}</div>
    <div>${listaDeAlunos[i].idade}</div>
    <div>${listaDeAlunos[i].matricula}</div>
    </div>
    `);
}