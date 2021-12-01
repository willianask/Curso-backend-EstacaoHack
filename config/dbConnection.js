// npm install pg
// importa somente a classe Client da biblioteca pg como metodo de desestruturação
const { Client } = require ('pg')
const client = new Client({
    connectionString: process.env.DATABASE_URL ||'postgres://fnfdvqrfgnvpwo:28931dfa9528a13c706303e730217a35286b87e1e4713c946536a707f1e6307a@ec2-54-198-213-75.compute-1.amazonaws.com:5432/davktmk2dcbkvb',
    ssl:{
        rejectUnauthorized:false
    }
})

client.connect()

module.exports = client