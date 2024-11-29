const con = require('../connect.js/database')

const create = (req, res) => {
    let id_cond = req.body.id_cond == undefined ? null : req.body.id_cond;
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let cpf = req.body.cpf;
    let data_admissao = req.body.data_admissao;

    let query = `INSERT INTO funcionarios (id_cond, nome, cargo, cpf, data_admissao) VALUES`
    query += `( ${id_cond},'${nome}', '${cargo}', '${cpf}', '${data_admissao}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM funcionarios', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let id_cond = req.body.id_cond == undefined ? null : req.body.id_cond;
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let cpf = req.body.cpf;
    let data_admissao = req.body.data_admissao;
    const id = Number(req.params.id);

    let query = `UPDATE funcionarios SET id_cond =  ${id_cond}, nome = '${nome}', cargo = '${cargo}', cpf = '${cpf}', data_admissao = '${data_admissao}' WHERE id = ${id}`;
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
    const query = `DELETE FROM funcionarios WHERE id = ?`
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