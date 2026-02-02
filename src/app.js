import express from 'express'
import cookieParser from 'cookie-parser'
const app=express()

//not using cors now as we dont have front end yet

app.use(express.json({limit:"20kb"})) //makes req.body usable and inserts info in it

app.use(express.urlencoded({extended:true,limit:"20kb"})) //for form data ...creates and puts it in req.body

app.use(express.static("public"))

app.use(cookieParser())

app.use("/api/public")

export {app}