const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'chatpet',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

const cliente = sequelize.define('cliente', {
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    usuario: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING,
    },
    historico: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.INTEGER,
    },
});

const empreendendor = sequelize.define('empreendendor', {
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    usuario: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING,
    },
    historico: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.INTEGER,
    },
});

const transacao = sequelize.define('transacao', {
    valor: {
        type: DataTypes.FLOAT,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    FK_usuario_c: {
        type: DataTypes.STRING,
        references: 'cliente',
        primaryKey: true
    },
    FK_usuario_e: {
        type: DataTypes.STRING,
        references: 'empreendedor',
        primaryKey: true
    },
});
cliente.hasMany(transacao)
transacao.belongsTo(cliente)

const veterinario = sequelize.define('veterinario', {
    crmv: {
        type: DataTypes.STRING,
    },
    FK_usuario_e: {
        type: DataTypes.STRING,
        references: 'empreendedor',
        primaryKey: true
    },
});

const hotel = sequelize.define('hotel', {
    vagas: {
        type: DataTypes.INTEGER
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    tiposDeQuarto: {
        type: DataTypes.STRING,
    },
    horario_inicio: {
        type: DataTypes.INTEGER
    },
    horario_termino: {
        type: DataTypes.INTEGER
    },
    avaliacao: {
        type: DataTypes.INTEGER
    },
    FK_usuario_e: {
        type: DataTypes.STRING,
        references: 'empreendedor',
        primaryKey: true
    },
});
const petShop = sequelize.define('petShop', {
    vagas: {
        type: DataTypes.INTEGER,
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    FK_usuario_e: {
        type: DataTypes.STRING,
        references: 'empreendedor',
        primaryKey: true
    },
});

const publicacao = sequelize.define('publicacao', {
    foto: {
        type: DataTypes.STRING,
    },
    likes: {
        type: DataTypes.INTEGER,
    },
    legenda: {
        type: DataTypes.STRING,
    },
    comentarios: {
        type: DataTypes.STRING,
    },
    FK_usuario_c: {
        type: DataTypes.STRING,
        references: 'cliente',
        primaryKey: true
    },
    FK_usuario_e: {
        type: DataTypes.STRING,
        references: 'empreendedor',
        primaryKey: true
    },
});
cliente.hasMany(publicacao)
publicacao.belongsTo(cliente)

