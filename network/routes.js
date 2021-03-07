const express = require('express')
const carrera = require('../components/carrera/network')
const docente = require('../components/docente/network')
const estudiante = require('../components/estudiante/network')
const titulacion = require('../components/titulacion/network')
const institucion = require('../components/institucion/network')

const routes = function(server) {
    server.use('/carrera', carrera)
    server.use('/docente', docente)
    server.use('/estudiante', estudiante)
    server.use('/titulacion', titulacion)
    server.use('/institucion', institucion)
}

module.exports = routes