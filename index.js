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

newarr = [];
newarr1 = [];

// var nex_data = sheetData.map((e, idx) => {
// //   if (e._1 && idx !== 0) {
// //     return newarr.push(e._1);
// //   }

//     newarr1{}

// }, newarr);

const array = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 2, name: "Mary", age: 28 },
  { id: 1, name: "David", age: 35 },
];

const uniqueArray = sheetData.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue._1]) {
    accumulator[currentValue._1] =[] ;
  }
  accumulator[currentValue._1].push(currentValue);
  return accumulator;
}, {});

// console.dir(uniqueArray['SPARK PLUGS'].details); 

// const myArray = nex_data;
// const mySet = [...new Set(newarr)];
// console.log(mySet);

const jsonData911 = JSON.stringify(uniqueArray, null, 2);

console.log(jsonData911);

fs.writeFileSync("beta_final.json", jsonData911);

// console.log("Conversion complete");
