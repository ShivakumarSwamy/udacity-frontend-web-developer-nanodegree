const express = require("express")
const app = express()

const port = 3000
app.listen(port, () => console.log(`server started at port ${port}`))

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use(express.static("website"))

const formula1TeamInfos = [{ name: "mercedes", base: "uk" }]

app.get("/teamInfos", (request, response) => response.send(formula1TeamInfos))

app.post("/teamInfos", (request, response) => {
  formula1TeamInfos.push(request.body)
  response.send(formula1TeamInfos)
})