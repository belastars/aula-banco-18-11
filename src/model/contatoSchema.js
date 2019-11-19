const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContatoSchema = new Schema( {

    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipos dos dados
        auto: true, // é autogerado?
        required: true // é obrigatorio?
    },
    nome: {
        type: String,
        required: true,
        unique: true // não deixa que os dados seja igual 

    },
    celular: {

        type: String,
        required: true
    }

})

const ContatosCollection = mongoose.model("contato", ContatoSchema)

module.exports = ContatosCollection

