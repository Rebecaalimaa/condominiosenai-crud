const con = require('../connect.js/database')

const create = (req, res) => {
    let numero = req.body.numero;
    let bloco = req.body.bloco;
    let andar = req.body.andar;
    let id_cond = req.body.id_cond == undefined ? null : req.body.id_cond;

    let query = `INSERT INTO apartamentos (numero, bloco, andar, id_cond) VALUES`
    query += `('${numero}', '${bloco}', '${andar}', ${id_cond})`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM apartamentos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let numero = req.body.numero;
    let bloco = req.body.bloco;
    let andar = req.body.andar;
    let id_cond = req.body.id_cond == undefined ? null : req.body.id_cond;
    const id = Number(req.params.id);

    let query = `UPDATE apartamentos SET numero = '${numero}', bloco = '${bloco}', andar = '${andar}', id_cond = ${id_cond} WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(202).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id= Number(req.params.id);
    const query = `DELETE FROM apartamentos WHERE id = ?`
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