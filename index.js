const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
userRoute(app)
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('OK'))

app.listen(port, () => console.log('API START OK'))