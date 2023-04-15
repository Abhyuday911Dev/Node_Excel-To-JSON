var express = require('express');
var router = express.Router();
const fs = require("fs");

var Data

router.get('/', async function(req, res, next) {

  fs.readFile('./convert.json', 'utf8', async (err, data) => {
    if (err) throw err;
    
    Data = await JSON.parse(data);
    Data = Data["SAPRE PARTS"]
    Data = JSON.stringify(Data)

    fs.writeFile('./data.json', Data, (err) => {
      if (err) throw err;
      res.json('Data written to file');
    });
  });
  
});

module.exports = router;