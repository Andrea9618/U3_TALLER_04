const storage = require('./storage')

function addInstitucion(nombre, domicilio, telefono, tipo_institucion, fecha_creacion, representante_legal) {
    return new Promise((resolve, reject) => {
        let institucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            fecha_creacion : fecha_creacion,
            representante_legal : representante_legal,
        }
        storage.add( institucion )
        resolve( institucion )
    })
}

function getInstitucion( filtroInstitucion ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroInstitucion ) )
    } )
}

function updateInstitucion(idInstitucion, nombre, domicilio, telefono, tipo_institucion, fecha_creacion, representante_legal) {
    return new Promise( async (resolve, reject) => {
        let institucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            fecha_creacion : fecha_creacion,
            representante_legal : representante_legal,
        }
        const result = await storage.update(idInstitucion, institucion)
        resolve( result )
    })
}

function deleteInstitucion(idInstitucion) {
    return new Promise((resolve, reject) => {
        storage.delete( idInstitucion )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addInstitucion,
    getInstitucion,
    updateInstitucion,
    deleteInstitucion,
}