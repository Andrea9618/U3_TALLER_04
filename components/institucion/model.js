const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    domicilio: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    tipo_institucion: {
        type: String,
        required: true,
    },
    fecha_creacion: {
        type: Date,
        required: true,
    },
    representante_legal: {
        type: Schema.ObjectId,
        ref: 'Representante_Legal',
    },
})

const model = mongoose.model('Institucion', mySchema)
module.exports = model