const model = require('./model')

function getTitulacion(filtroTitulacion) {
    let filtro = {}
    if (filtroTitulacion != null) {
        filtro = { nombre : filtroTitulacion }
    }
    const titulacionList = await model.find( filtro )
    return titulacionList

}

function addTitulacion( objeto ) {
    const titulacion = new model( objeto )
    titulacion.save()
}

async function updateTitulacion( idTitulacion, objeto) {
    const foundTitulacion = await model.findOne({ _id: idTitulacion })

    foundTitulacion.carrera = objeto.carrera
    foundTitulacion.tutor = objeto.tutor
    foundTitulacion.revisor = objeto.revisor
    foundTitulacion.tipo_titulacion = objeto.tipo_titulacion
    foundTitulacion.archivo = objeto.archivo
    foundTitulacion.fecha_archivo = objeto.fecha_archivo
    foundTitulacion.estado = objeto.estado

    const result = await foundTitulacion.save()
    return result
}

function deleteTitulacion(idCarrera) {
    return model.deleteOne({ _id: idCarrera })
}

module.exports = {
    add: addTitulacion,
    get: getTitulacion,
    update: updateTitulacion,
    delete: deleteTitulacion,
}