const con = require('../connect.js/database')

const create = (req, res) => {
    let idade = req.body.idade;
    let nascimento = req.body.nascimento;
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let id_ap = req.body.id_ap == undefined ? null : req.body.id_ap;

    let query = `INSERT INTO moradores (idade, nascimento, cpf, nome, telefone, id_ap) VALUES`
    query += `('${idade}', '${nascimento}', '${cpf}', '${nome}', '${telefone}', ${id_ap})`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM moradores', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let idade = req.body.idade;
    let nascimento = req.body.nascimento;
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let id_ap = req.body.id_ap == undefined ? null : req.body.id_ap;
    const id = Number(req.params.id);
    
    let query = `UPDATE moradores SET idade = '${idade}', nascimento = '${nascimento}', cpf = '${cpf}', nome = '${nome}', telefone = '${telefone}', id_ap = ${id_ap} WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(202).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id);
    
    const query = `DELETE FROM moradores WHERE id = ?`
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(204).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}