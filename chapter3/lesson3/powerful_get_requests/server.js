const express = require("express")
const app = express()

const appData = {}

app.get("/all", function(req, res) {
  res.send(appData)
})

app.listen(3000)
