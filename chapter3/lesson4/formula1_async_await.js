const teams = ["mercedes", "ferrari"]

function printTeams() {
  console.log(teams)
}

async function addTeam(team) {
    teams.push(team)
}

async function main() {
  await addTeam("redbull") // Wait until promise resolves
  printTeams()
}

main()
console.log("I am not waiting for new team to be added as I am not async")
