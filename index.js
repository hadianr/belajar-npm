// Import the Axios Library
const axios = require('axios');

return axios.get('https://www.thesportsdb.com/api/v1/json/3/all_countries.php')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
