const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const orderSchema = new Schema({
    rider: { 
        type: Schema.Types.ObjectId, 
        ref: 'Riders' 
    },
    driver: { 
        type: Schema.Types.ObjectId, 
        ref: 'Driver' 
    },
    car: { 
        type: Schema.Types.ObjectId, 
        ref: 'Cars' 
    },
    origin: {
        coords: {
            lat: String,
            long: String
        },
        address: {
            country: String,
            state: String,
            city: String,
            street: String,
            zip: String,
        }
    },
    destination: {
        coords: {
            lat: String,
            long: String
        },
        address: {
            country: String,
            state: String,
            city: String,
            street: String,
            zip: String,
        }
    },
    journyDateTime: {
        type: Date,
        require: true
    },
    payment: {
        status: {
            type: String, 
            enum: ["PENDING", "SUCCESS", "CANCEL", "FAILED"]
        },
        mode: {
            type: String, 
            enum: ["PENDING", "SUCCESS", "CANCEL", "FAILED"],
        },
        dateTime: {
            type: Date
        }
    } 
}, {timestamps: true})

module.exports = mongoose.model("Orders", orderSchema)
