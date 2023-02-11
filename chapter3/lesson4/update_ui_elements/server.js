const express = require("express")
const app = express()

const port = 3000
app.listen(port, () => console.log(`server is running at ${port}`))

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/fakeAnimalData", (request, response) => {
  response.send({ animal: "lion", fact: "lion is fun" })
})

const animalsData = []

app.post("/addAnimal", (request, response) => {
  animalsData.push(request.body)
  response.send(animalsData)
})

app.get("/all", (request, response) => {
  console.log(animalsData)
  response.send(animalsData)
})

app.use(express.static("website"))