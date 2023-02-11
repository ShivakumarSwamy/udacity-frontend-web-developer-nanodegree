const teams = ["mercedes", "ferrari"]

function printTeams() {
  console.log(teams)
}

function addTeam(team) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      teams.push(team)

      if (true) {
        resolve()
      } else {
        reject("Unable to add team")
      }
    }, 2000)
  })
}


console.log("Before: " + teams)
addTeam("redbull").then(printTeams)
console.log("After Promise: " + teams)