const request = require('request');
const breedName = process.argv[2];

//fetch breed content
const fetchBreed = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    
    console.log('body:', body);
    console.log(typeof body);

    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    //print out breed description
    const breed = data[0];
    if (!breed) {
      console.log(`Failed to find breed ${breedName}`);
      return false;
    }
    console.log(breed['description']);

       
  });

  return true;

};

fetchBreed(breedName);

