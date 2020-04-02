const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./homeGym.db')

db.serialize(function() {
    
    //deletar dados da tabela userProfessional
    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
        if(err) return console.log(err)
        
        console.log('Profissional deletado', this);
    })
/* 
    // DELETA TODOS OS DADOS DA TABELA
    db.run(`DELETE FROM userProfessional`, function(err) {
        if(err) return console.log(err)
        
        console.log('Profissional deletado', this);
    })
*/
    //consultar dados na tabela userProfessional
    db.all(`SELECT * FROM userProfessional`, function(err, rows) {
        if(err) return console.log(err)
        
        console.log(rows);
    })
        
    //deletar dados da tabela userClient
    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
        if(err) return console.log(err)
        
        console.log('Cliente deletado', this);
    })
/*
    // DELETA TODOS OS DADOS DA TABELA
    db.run(`DELETE FROM userClient`, function(err) {
        if(err) return console.log(err)
        
        console.log('Cliente deletado', this);
    })
*/
    //consultar dados na tabela userClient
    db.all(`SELECT * FROM userClient`, function(err, rows) {
        if(err) return console.log(err)
        
        console.log(rows);
    })
})