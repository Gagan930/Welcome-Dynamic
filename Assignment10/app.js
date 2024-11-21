const express=require("express")
const mongoose = require('mongoose');
const app=express()
const studentsRouter=require("./routes/students")
const coursesRouter=require("./routes/courses")
const PORT=3030
app.use(express.json())

app.use("/students",studentsRouter)
app.use("/courses",coursesRouter)

mongoose.connect('mongodb+srv://Gagan:Gagan@930@cluster1.wnkx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => {
    console.log('database Connected!')
    app.listen(PORT,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(`Listening on PORT ${PORT}`)
        }
    })
  }).catch((err)=>console.log(err));

