
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
