class Aluno{
    constructor(primeiroNome, ultimoNome, turma, matricula, dataDeNascimento, foto){
        this.primeiroNome = primeiroNome,
        this.ultimoNome = ultimoNome,
        this.turma = turma,
        this.matricula = matricula,
        this.dataDeNascimento = new Date(dataDeNascimento),
        this.foto = foto
    }

    getIdade(){
        var date = new Date();
        var dataAtual = date.getFullYear();
        var data = this.dataDeNascimento.split('/').map(i => Number(i))
        return (dataAtual - data[2]) 
    }
    getNome(){
        return this.ultimoNome + ', ' + this.primeiroNome 
    }
}