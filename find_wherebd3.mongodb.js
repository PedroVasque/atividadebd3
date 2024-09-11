/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"

/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].find(
    {"cpf":"123.456.789-00",
    "codigo_aluno":"A001"}, {"_id":0} 
)