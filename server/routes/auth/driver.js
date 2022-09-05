const { Router } = require("express")
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const isLogin = require("../../middlewares/isLogin")
const Driver = require("../../models/driver")

router.get("/", async (req, res) => {
    const drivers = await Driver.find().select("-password")
    return res.send(drivers)
})

router.get("/get", async (req, res) => {
    const id = req.body.id

    Driver.findById(id, "-password", async (err, drivers) => {
        if (err) { 
            res.send(err).status(500)
        }
        else {
            return res.send(drivers)
        }
    })
})

router.post("/register", async (req, res) => {
    const phone = req.body.phone 
    const pin = req.body.pin 

    Driver.findOne({phone}, "", async (err, driver) => {
        if(err) {
            res.send(err).status(500)
        }

        if(driver) {
            return res.status(200).send({
                registered: true
            })
        }
        
        if(driver == null){
            driver = await Driver.create({"phone": phone, "pin": pin})
        }
        
        const token = jwt.sign({
            id: driver._id,
            name: driver.name,
        }, "secret", { expiresIn: '1d' })

        return res.send({driver, token, registered: false})
    })
})

router.post("/login", async (req, res) => {
    const phone = req.body.phone
    const pin = req.body.pin

    Driver.findOne({phone}, "", async (err, driver) => {
        if(err) {
            return res.send(err).status(500)
        }
        
        if(driver == null){
            return res.status(401).send({
                status: false,
                message: "You are not registered!",
            })
        }

        if(driver.pin == pin) {
            const token = jwt.sign({
                id: driver._id,
                name: driver.name
            }, "secret", { expiresIn: '1d' })


            return res.status(200).send({
                status: true,
                message: "",
                driver,
                token
            })
        }
        else {
            return res.status(401).send({
                status: false,
                message: "Password doesn't matched!",
            })
        }
    })
})


router.post("/isAuthenticate", isLogin, async (req, res) => {
    return res.status(200).send()
})



module.exports = router