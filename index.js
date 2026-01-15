require('dotenv').config()
const express = require('express')
const dbConnection = require('./database/dbConnection')
const  route  = require('./route')
const app = express()
const port = 3000
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/controller', (req, res) => {
  res.send("controller thake sob pabe")
})
dbConnection()
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
