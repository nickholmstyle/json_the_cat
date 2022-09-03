const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    let data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0]);
      console.log(response.statusCode);
    } else {
      console.log(`Breed ${breed} not found!`);
    }
  }
});
