
function getAllTeams() {
  return fetch("/teamInfos", {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  })
}

async function getAllData() {
  const response  = await getAllTeams()
  try {
    const formula1TeamInfos = await response.json()
    console.log(formula1TeamInfos)
  } catch(error) {
    console.log(error)
  }
}

function postDataNewTeam(data) {
  return fetch("/teamInfos", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

async function postData(data) {
  const response  = await postDataNewTeam(data)
  try {
    const formula1TeamInfos = await response.json()
    console.log(formula1TeamInfos)
  } catch (error) {
    console.log(error)
    throw new Error("Unable to save new team data")
  }
}

postData({ name: "ferrari", base: "italy" }).then(getAllData)
