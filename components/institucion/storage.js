const model = require('./model')

function addInstitucion( objeto ) {
    const institucion = new model( objeto )
    institucion.save()
}

async function getInstitucion( filtroInstitucion ) {
    let filtro = {}
    if (filtroInstitucion != null) {
        filtro = { nombre : filtroInstitucion }
    }
    const institucionList = await model.find( filtro )
    return institucionList
}

async function updateInstitucion( idDocente, objeto ) {
    const foundInstitucion = await model.findOne({ _id: idInstitucion })

    foundInstitucion.nombre = objeto.nombre
    foundInstitucion.domicilio = objeto.domicilio
    foundInstitucion.telefono = objeto.telefono
    foundInstitucion.tipo_institucion = objeto.tipo_institucion
    foundInstitucion.fecha_creacion = objeto.fecha_creacion
    foundInstitucion.representante_legal = objeto.representante_legal

    const result = await foundInstitucion.save()
    return result
}

function deleteInstitucion(idInstitucion) {
    return model.deleteOne({ _id: idInstitucion })
}

module.exports = {
    add: addInstitucion,
    get: getInstitucion,
    update: updateInstitucion,
    delete: deleteInstitucion,
}