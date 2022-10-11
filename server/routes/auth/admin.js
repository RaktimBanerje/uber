const { Router } = require("express")
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const Admin = require("../../models/admin")

router.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    Admin.findOne({email}, "", async (err, admin) => {
        if(err) { return res.status(500).send() }
        else if(admin) {
            if(admin.password == password) {
                
                const token = jwt.sign({
                    id: admin._id,
                    name: admin.name,
                    role: "ADMIN"
                }, "secret", { expiresIn: '1d' })

                const data = {
                    id: admin._id,
                    name: admin.name,
                }

                return res.status(200).send({user: data, token})
            }
            else {
                return res.status(401).send({message: "Password doesn't matched!"})
            }
        }
        else {
            return res.status(401).send({message: "You are not registered!"})
        }
    })
})

module.exports = router