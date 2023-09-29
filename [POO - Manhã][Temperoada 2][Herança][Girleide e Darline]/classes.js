class Participante{
    constructor(nome, cpf, dataDeNascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
}

class Aluno extends Participante{
    constructor(nome, cpf, dataDeNascimento, matricula){
        super(nome, cpf, dataDeNascimento)
        this.matricula = matricula;
    }
}


class Professor extends Participante{
    constructor(nome, cpf, dataDeNascimento, siape, formacao){
        super(nome, cpf, dataDeNascimento)
        this.siape = siape;
        this.formacao = formacao;
    }
}

class EventoAcademico{
    constructor(){
        this.listaDeParticipantes = []
    }

    cadastrarParticipante(participantes){
        this.listaDeParticipantes.push(participantes);
    }
}