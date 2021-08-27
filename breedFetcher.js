const request = require('request');

//fetch breed content
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
  request(url, (error, response, body) => {
    //if (error) {
    //console.log('error:', error);
    // }
    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }
    
    //console.log('body:', body);
    //console.log(typeof body);

    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    //print out breed description
    const breed = data[0];
    if (breed) {
      callback(null,breed['description']);
    } else {
      callback(`Failed to find breed ${breedName}`,null);
    }
             
  });

  return true;


};

module.exports = {
  fetchBreedDescription
};




