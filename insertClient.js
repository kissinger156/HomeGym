const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./homeGym.db')

db.serialize(function() {

    // inserir dados na tabela userClient
    const queryClient = `
    INSERT INTO userClient(
        name,
        cpf,
        email,
        phone
    ) VALUES (?,?,?,?);
    `
    const valuesClient = [
        "Rafael Dias",
        "1234567890",
        "rafael@teste.com",
        "15944445555"
    ]

    db.run(queryClient, valuesClient, function(err) {
        if(err) return console.log(err);

        console.log(this);
    })

    // consultar dados da tabela userClient
    db.all(`SELECT * FROM userClient`, function(err, rows) {
        if(err) return console.log(err)
        
        console.log(rows);
    })

})