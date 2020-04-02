const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./homeGym.db')

db.serialize(function() {

    // inserir dados na tabela userProfessional
    const queryProfessional = `
    INSERT INTO userProfessional(
        name,
        cpf,
        email,
        phone,
        occupation,
        formation,
        description,
        actingTime
    ) VALUES (?,?,?,?,?,?,?,?);
    `
    const valuesProfessional = [
        "Rafael Dias",
        "1234567890",
        "rafael@teste.com",
        "15944445555",
        "Personal Trainer",
        "Licenciatura em Educação Física",
        "Formado em Educação Física pela UNIP, trabalho como personal trainer na academia X, em Boituva-SP",
        "1 ano e 3 meses"
    ]

    db.run(queryProfessional, valuesProfessional, function(err) {
        if(err) return console.log(err);

        console.log(this);
    })

    // consultar dados da tabela userProfessional
    db.all(`SELECT * FROM userProfessional`, function(err, rows) {
        if(err) return console.log(err)
        
        console.log(rows);
    })

})