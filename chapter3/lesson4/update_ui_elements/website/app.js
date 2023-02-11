document.querySelector("#generate").addEventListener("click", performAction)

function performAction() {
  getFakeAnimalData()
    .then(postData)
    .then(updateUI)
}

async function updateUI() {
  const response = await fetch("/all")
  let allData = []
  try {
    allData = await response.json()
    console.log(allData)
  } catch(error) {
    console.log(error)
  }

  const divElement = document.createElement("div")
  const animalName = document.createElement("p")
  animalName.textContent = allData[0].animal
  divElement.append(animalName)

  const animalFact = document.createElement("p")
  animalFact.textContent = allData[0].fact
  divElement.append(animalFact)

  const animalFav = document.createElement("p")
  animalFav.textContent = allData[0].fav
  divElement.append(animalFav)

  document.querySelector("#generate").insertAdjacentElement("afterend", divElement)
}

async function postData(data) {
  const favValue = document.querySelector("#favorite").value
  await fetch("/addAnimal", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "animal": data.animal,
            "fact": data.fact, "fav": favValue })
  })
}

async function getFakeAnimalData() {
  const response = await fetch("/fakeAnimalData")

  try {
    return await response.json()
  } catch(error) {
    console.log(error)
  }
}