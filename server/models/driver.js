const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const driverSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    pin: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model("Drivers", driverSchema)
