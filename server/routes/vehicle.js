const express = require("express")
const router = express.Router()
const isLogin = require("../middlewares/isLogin")
const Vehicle = require("../models/vehicle")

router.post("/", isLogin, (req, res) => {

    const driver = req.user.id

    Vehicle.find({driver}, "", async (err, vehicles) => {
        if(err) {
            res.send(err).status(500)
        }

        else {
            return res.send({vehicles})
        }
    })

})

router.post("/", isLogin, (req, res) => {
    const number = req.body.number 

    Vehicle.findOne({number}, "", async (err, vehicle) => {
        if(err) {
            res.send(err).status(500)
        }

        if(vehicle) {
            return res.status(200).send({
                registered: true
            })
        }
        
        if(vehicle == null){
            vehicle = await Vehicle.create({number, driver: req.user.id})
        }
        
        return res.send({vehicle, registered: false})
    })
})


module.exports = router