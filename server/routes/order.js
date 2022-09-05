const express = require("express")
const router = express.Router()
const isLogin = require("../../middlewares/isLogin")
const Rider = require("../../models/rider")
const Order = require("../../models/order")

router.get("/", async(req, res) => {

})

router.post("/", isLogin, async(req, res) => {
    const rider = req.user    
    const rider_origin = req.body.rider_origin
    const rider_destination = req.body.rider_destination

    const order = await Order.create({
        rider: rider.id,
        origin: rider_origin,
        destination: rider_destination
    })

    console.log(order)
})

module.exports = router