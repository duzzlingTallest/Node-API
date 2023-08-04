const express = require("express")
const app = express()

const userRouter = require("./router/userRouter")
const classRouter = require("./router/classRouter")
console.log("🚀 ~ file: app.js:6 ~ classRouter:", classRouter)

// mongoose

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/schoolData").then(() => {
    console.log("db is connected !!!");
}).catch((error) => {
    console.log(error);
})


app.use(express.json())
app.use("/user", userRouter)
app.use("/class", classRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})