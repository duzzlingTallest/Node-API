const express = require("express")
const cors = require("cors")
const app = express()



const userRouter = require("./router/userRouter")
const classRouter = require("./router/classRouter")
console.log("🚀 ~ file: app.js:6 ~ classRouter:", classRouter)

// mongoose

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://urvish199:LKK2TNVlQoKufHUZ@school.thozwrc.mongodb.net/school").then(() => {
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