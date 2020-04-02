const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./homeGym.db')

db.serialize(function() {

    // TODO criar tabela

    // criando tabela do CLiente
    db.run(`
    CREATE TABLE IF NOT EXISTS userClient(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        cpf TEXT,
        email TEXT,
        phone TEXT
        );
        `)
        
    // criando tabela do Profissional
    db.run(`
        CREATE TABLE IF NOT EXISTS userProfessional(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            cpf TEXT,
            email TEXT,
            phone TEXT,
            occupation TEXT,
            formation TEXT,
            description TEXT,
            actingTime TEXT
        );
    `)
})

module.exports = db