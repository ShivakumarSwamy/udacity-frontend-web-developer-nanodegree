const express = require("express")
cont app = express()

app.listen(3000, () -> console.log("server started"))

const data = []

app.post("/addMovie", addMovie)

function addMovie(req, res) {
  console.log(req.body)
  data.push(req.body)
}
