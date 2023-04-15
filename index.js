// var express = require('express');
// var router = express.Router();
// const fs = require("fs");

// var Data

// router.get('/', async function(req, res, next) {

//   fs.readFile('./convert.json', 'utf8', async (err, data) => {
//     if (err) throw err;
//     counter = 0
    
//     Data = await JSON.parse(data);
//     // console.log(Data)
//     for (let key in Data) {
//       console.log(key);
//     }

//     // Data = Data["SAPRE PARTS"]
//     Data = JSON.stringify(Data)

//     fs.writeFile('./data.json', Data, (err) => {
//       if (err) throw err;
//       res.json('Data written to file');
//     });
//   });
  
// });

// module.exports = router;

const xlsx = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = xlsx.readFile('./input.xlsx');

// Get the name of the first sheet
const sheetName = workbook.SheetNames[1];

// Get the data from the sheet as an array of objects
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Convert the data to JSON format
const jsonData = JSON.stringify(sheetData, null, 2);

// Write the JSON data to a file
fs.writeFileSync('output.json', jsonData);

console.log('Conversion complete'); 
