class Aluno{
    constructor(primeiroNome, ultimoNome, matricula, dataDeNascimento, foto){
        this.primeiroNome = primeiroNome,
        this.ultimoNome = ultimoNome,
        this.matricula = matricula,
        this.dataDeNascimento = new Date(dataDeNascimento),
        this.foto = foto
    }

    getIdade(){
        var date = new Date();
        var dataAtual = date.getFullYear();
        var data = this.dataDeNascimento
        return (dataAtual - data.getFullYear()) 
    }
    getNome(){
        return this.ultimoNome + ', ' + this.primeiroNome 
    }
}

class Turma {
    constructor(){
        this.listaDeAlunos = []
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)
    }
}
