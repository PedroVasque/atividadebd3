/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"
/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"
/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].updateOne(
    {nome:"Ana Paula Silva"}, {$set: {nome:"Pedro Gostoso Lindo "}},
    {cpf:"123.456.789-00"}, {$set: {cpf:"234.876.890-56"}},
    {rg:"12.345.678-9"},      {$set: {rg:"23.645.985-5"}},
    {"codigo_aluno": "A001"}
);