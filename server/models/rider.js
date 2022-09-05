const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const riderSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model("Riders", riderSchema)
