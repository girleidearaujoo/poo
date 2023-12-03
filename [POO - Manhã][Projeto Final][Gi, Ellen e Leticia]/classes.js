class Empreendedor{
    constructor(nome, telefone, email, descricao, endereco, foto){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.descricao = descricao;
        this.endereco = endereco;
        this.foto = foto
    }
}

class Cliente{
    constructor(nome, cpf, telefone, email, foto){
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.foto = foto;
        }
}

class Veterinario extends Empreendedor{
    constructor(nome,  telefone, email, descricao, endereco, foto, crmv){
        super(nome, telefone, email, descricao, endereco, foto);
        this.crmv = crmv;
    }
}

class Baba extends Empreendedor{
    constructor(nome,  telefone, email, descricao, endereco, foto, valor, cpf){
        super(nome, telefone, email, descricao, endereco, foto);
        this.valor = valor;
        this.cpf = cpf;
    }
}

class PetShop extends Empreendedor{
    constructor(nome,  telefone, email, descricao, endereco, foto, vagas, cnpj){
        super(nome, telefone, email, descricao, endereco, foto);
        this.vagas = vagas;
        this.cnpj = cnpj;
    }
}

class Hotel extends Empreendedor{
    constructor(nome,  telefone, email, descricao, endereco, foto, vagas, cnpj, tiposDeQuarto, horario_inicio, horario_termino, avaliacao){
        super(nome, telefone, email, descricao, endereco, foto);
        this.vagas = vagas;
        this.cnpj = cnpj;
        this.tiposDeQuarto = tiposDeQuarto;
        this.horario_inicio = horario_inicio;
        this.horario_termino = horario_termino;
        this.avaliacao = avaliacao;
    }
}

