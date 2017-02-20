var express = require('express')
var app = express()
const port = 3500

app.use(express.static('./dist/'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
