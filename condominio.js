const con = require('../connect.js/database')

const create = (req, res) => {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let cnpj = req.body.cnpj;

    let query = `INSERT INTO condominio (nome, endereco, cnpj) VALUES`
    query += `('${nome}', '${endereco}', '${cnpj}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM condominio', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let cnpj = req.body.cnpj;
    const id = Number(req.params.id);
    
    let query = `UPDATE condominio SET nome = '${nome}', endereco = '${endereco}', cnpj = '${cnpj}' WHERE id = ${id}`;
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
    const query = `DELETE FROM condominio WHERE id = ?`
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