const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const driverSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    isProfileActive: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Drivers", driverSchema)
