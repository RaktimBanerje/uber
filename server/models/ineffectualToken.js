const { default: mongoose } = require("mongoose")
const Schema = require("mongoose").Schema

const ineffectualTokenSchema = new Schema({
    signature: {
        type: String,
        require: true,
        unique: true
    }, 
    exp: {
        type: Date,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("InffectualTokens", ineffectualTokenSchema)