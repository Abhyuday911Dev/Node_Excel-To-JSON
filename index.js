function replacer(key, value) {
    const newKey = key === '_1' ? 'PART DESCRIPTION' : key;
    return newKey === key ? value : {[newKey]: value};
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

// null is the replacer function
const jsonData = JSON.stringify(sheetData, replacer, 2);

// Write the JSON data to a file
fs.writeFileSync("output.json", jsonData);

console.log("Conversion complete");
