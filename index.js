require('dotenv').config()

const response = require('express')
const app = response()

const port = 4000

app.get('/',(req,res) => {
  res.send("HELLO BACKEND!")
})

app.get('/instagram',(req,res)=>{
  res.send("aryan._.ftw")
})

app.listen(process.env.PORT,()=>{
  console.log("Server started")
})