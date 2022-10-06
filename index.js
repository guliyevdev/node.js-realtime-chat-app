const express = require('express')
const app = express()
const port = 3000
const indexrouter = require('./routes/index')

app.set('view engine','ejs')
app.use('/public', express.static('public'))
app.use('/',indexrouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })