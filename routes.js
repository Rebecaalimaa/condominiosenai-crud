const express = require ('express')
const routes = express.Router();

const condominio = require('../src/controller.js/condominio')
const funcionarios = require('../src/controller.js/funcionarios')
const apartamentos = require('../src/controller.js/apartamentos')
const moradores = require('../src/controller.js/moradores')


const teste = (req, res) => {
    res.json("Back-end respodendo com sucesso")
}

routes.get('/', teste)

routes.post('/condominio', condominio.create)
routes.get('/condominio', condominio.read)
routes.put('/condominio/:id', condominio.update)
routes.delete('/condominio/:id', condominio.deletar)

routes.post('/funcionarios', funcionarios.create)
routes.get('/funcionarios', funcionarios.read)
routes.put('/funcionarios/:id', funcionarios.update)
routes.delete('/funcionarios/:id', funcionarios.deletar)

routes.post('/apartamentos', apartamentos.create)
routes.get('/apartamentos', apartamentos.read)
routes.put('/apartamentos/:id', apartamentos.update)
routes.delete('/apartamentos/:id', apartamentos.deletar)

routes.post('/moradores', moradores.create)
routes.get('/moradores', moradores.read)
routes.put('/moradores/:id', moradores.update)
routes.delete('/moradores/:id', moradores .deletar)


module.exports = routes