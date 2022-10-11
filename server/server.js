require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

const driverAuthRoute = require("./routes/auth/driver")
const adminAuthRoute = require("./routes/auth/admin")
const orderRoute = require("./routes/auth/driver")
const vehicleRoute = require("./routes/vehicle")

// allow CORS
app.use(cors())

// parse request
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connection successfully"))
.catch(() => console.log("Database connection failed"))

app.use("/api/driver", driverAuthRoute);
app.use("/api/admin", adminAuthRoute);
app.use("/api/order", orderRoute);
app.use("/api/vehicle", vehicleRoute);

app.listen(process.env.PORT || 8080, () => {
    console.log(`API server is app and running on PORT ${process.env.PORT || 8080}`)
})