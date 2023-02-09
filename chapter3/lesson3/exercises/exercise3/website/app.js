/* Function to POST data */
const postData = async ( url = '', data = {}) => {
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

    try {
      const newData = await response.json();
      // console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}

// Call Function

postData("/addAnimal", {"name": "lion"})
postData("/addAnimal", {"name": "tiger"})
postData("/addAnimal", {"name": "jaguar"})
postData("/addAnimal", {"name": "cheetah"})