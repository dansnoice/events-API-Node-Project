const express = require("express")
const logger = require("morgan")
const connectToMongoDB = require("./database/mongoDB")
const app = express()
const PORT = 3000


//middleware
app.use(logger("dev"))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)

    connectToMongoDB()
})