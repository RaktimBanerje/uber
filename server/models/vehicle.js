const {default: mongoose} = require("mongoose")
const Schema = require("mongoose").Schema

const vehicleSchema = new Schema({
    number: {
        type: String,
        require: true
    },
    driver: {
        type: Schema.Types.ObjectId, 
        ref: 'Driver' 
    },
    type: {
        type: String,
        default: ""
    },
    isApprove: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Vehicles", vehicleSchema)