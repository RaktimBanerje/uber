const { Router } = require("express")
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
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

router.post("/login", async (req, res) => {
    const phone = req.body.phone

    Driver.findOne({phone}, "", async (err, driver) => {
        if(err) {
            res.send(err).status(500)
        }
        
        if(driver == null){
            driver = await Driver.create({"phone": phone})
        }
        
        const token = jwt.sign({
            id: driver._id,
            name: driver.name
        }, "secret", { expiresIn: '1d' })

        res.send({driver, token})
    })
})

router.post("/login", isLogin, (req, res) => {
    res.status(200).send()
})

module.exports = router