var express = require('express');
var router = express.Router();
const fs = require("fs")

const data = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

// convert the data to a JSON string
const jsonData = JSON.stringify(data);


/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.writeFile('./data.json', jsonData, async (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
});
 
module.exports = router;
