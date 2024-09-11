/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"

/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].insertMany(
    [
        {
            "codigo_turma": "T001",
            "codigo_aluno": "A001",
            "nome": "Ana Paula Silva",
            "cpf": "123.456.789-00",
            "rg": "12.345.678-9",
            "telefone_aluno": "+55 11 91234-5678",
            "telefone_responsavel": "+55 11 99876-5432",
            "email": "ana.silva@example.com",
            "data_nascimento": "2006-04-15"
        },
        {
            "codigo_turma": "T002",
            "codigo_aluno": "A002",
            "nome": "Lucas Pereira",
            "cpf": "234.567.890-11",
            "rg": "23.456.789-0",
            "telefone_aluno": "+55 21 93456-7890",
            "telefone_responsavel": "+55 21 98765-4321",
            "email": "lucas.pereira@example.com",
            "data_nascimento": "2007-05-20"
        },
        {
            "codigo_turma": "T003",
            "codigo_aluno": "A003",
            "nome": "Mariana Costa",
            "cpf": "345.678.901-22",
            "rg": "34.567.890-1",
            "telefone_aluno": "+55 31 94567-8901",
            "telefone_responsavel": "+55 31 97654-3210",
            "email": "mariana.costa@example.com",
            "data_nascimento": "2006-06-30"
        },
        {
            "codigo_turma": "T004",
            "codigo_aluno": "A004",
            "nome": "Gabriel Almeida",
            "cpf": "456.789.012-33",
            "rg": "45.678.901-2",
            "telefone_aluno": "+55 41 95678-9012",
            "telefone_responsavel": "+55 41 96543-2109",
            "email": "gabriel.almeida@example.com",
            "data_nascimento": "2007-07-10"
        },
        {
            "codigo_turma": "T005",
            "codigo_aluno": "A005",
            "nome": "Isabela Santos",
            "cpf": "567.890.123-44",
            "rg": "56.789.012-3",
            "telefone_aluno": "+55 51 96789-0123",
            "telefone_responsavel": "+55 51 95432-1098",
            "email": "isabela.santos@example.com",
            "data_nascimento": "2006-08-25"
        },
        {
            "codigo_turma": "T006",
            "codigo_aluno": "A006",
            "nome": "Felipe Oliveira",
            "cpf": "678.901.234-55",
            "rg": "67.890.123-4",
            "telefone_aluno": "+55 62 97890-1234",
            "telefone_responsavel": "+55 62 94321-0987",
            "email": "felipe.oliveira@example.com",
            "data_nascimento": "2007-09-05"
        },
        {
            "codigo_turma": "T007",
            "codigo_aluno": "A007",
            "nome": "Clara Rodrigues",
            "cpf": "789.012.345-66",
            "rg": "78.901.234-5",
            "telefone_aluno": "+55 71 98901-2345",
            "telefone_responsavel": "+55 71 93210-9876",
            "email": "clara.rodrigues@example.com",
            "data_nascimento": "2006-10-15"
        },
        {
            "codigo_turma": "T008",
            "codigo_aluno": "A008",
            "nome": "João Martins",
            "cpf": "890.123.456-77",
            "rg": "89.012.345-6",
            "telefone_aluno": "+55 81 99012-3456",
            "telefone_responsavel": "+55 81 92109-8765",
            "email": "joao.martins@example.com",
            "data_nascimento": "2007-11-20"
        },
        {
            "codigo_turma": "T009",
            "codigo_aluno": "A009",
            "nome": "Beatriz Lima",
            "cpf": "901.234.567-88",
            "rg": "90.123.456-7",
            "telefone_aluno": "+55 91 99123-4567",
            "telefone_responsavel": "+55 91 91098-7654",
            "email": "beatriz.lima@example.com",
            "data_nascimento": "2006-12-30"
        },
        {
            "codigo_turma": "T010",
            "codigo_aluno": "A010",
            "nome": "Ricardo Campos",
            "cpf": "012.345.678-99",
            "rg": "01.234.567-8",
            "telefone_aluno": "+55 95 99234-5678",
            "telefone_responsavel": "+55 95 92187-6543",
            "email": "ricardo.campos@example.com",
            "data_nascimento": "2007-01-25"
        }
    ]
)    