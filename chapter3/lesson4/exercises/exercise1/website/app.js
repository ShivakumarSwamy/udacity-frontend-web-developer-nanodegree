
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


