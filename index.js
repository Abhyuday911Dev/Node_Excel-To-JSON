function replacer(key, value) {
  const newKey = key === "_1" ? "PART DESCRIPTION" : key;
  return newKey === key ? value : { [newKey]: value };
}

const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("./input.xlsx");

// Get the name of the first sheet
const sheetName = workbook.SheetNames[1];

// Get the data from the sheet as an array of objects
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Convert the data to JSON format

let uniqueArray = sheetData.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue._1]) {
    accumulator[currentValue._1] = [];
  }
  accumulator[currentValue._1].push(currentValue);
  return accumulator;
}, {});

let keys = Object.keys(uniqueArray);
let uniqueArrayPretty = {};

keys.forEach((key) => {
  let uniqueArrayPrettySection = uniqueArray[key].reduce(
    (accumulator, currentValue) => {
      if (!accumulator[currentValue._2]) {
        accumulator[currentValue._2] = [];
      }
      accumulator[currentValue._2].push(currentValue);
      return accumulator;
    },
    {}
  );
  uniqueArrayPretty[key] = uniqueArrayPrettySection;
});

const jsonData911 = JSON.stringify(uniqueArrayPretty, null, 2);

fs.writeFileSync("final.json", jsonData911);
