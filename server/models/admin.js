const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const adminSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Admins", adminSchema)

