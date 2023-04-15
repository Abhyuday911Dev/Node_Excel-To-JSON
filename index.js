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

Chain_Spokit = sheetData.filter((e) => {
  return e._1 === "Chain Spokit";
});

CLUTCH_CABLE = sheetData.filter((e) => {
  return e._1 === "CLUTCH CABLE";
});

BRAKE_CABLE = sheetData.filter((e) => {
  return e._1 === "BRAKE CABLE";
});

ACC_CABLES = sheetData.filter((e) => {
  return e._1 === "ACC CABLES";
});

METER_CABLE = sheetData.filter((e) => {
  return e._1 === "METER CABLE";
});

CHOKE_CABLE = sheetData.filter((e) => {
  return e._1 === "CHOKE CABLE";
});

BRAKE_SHOES = sheetData.filter((e) => {
  return e._1 === "BRAKE SHOES";
});

CLUTCH_PLATES = sheetData.filter((e) => {
  return e._1 === "CLUTCH PLATES";
});

PETROL_TANK_LOCK = sheetData.filter((e) => {
  return e._1 === "PETROL TANK LOCK";
});

Ignition_Lock = sheetData.filter((e) => {
  return e._1 === "Ignition Lock";
});

// null is the replacer function
const jsonData = JSON.stringify(Chain_Spokit, null, 2);

const jsonData2 = JSON.stringify(CLUTCH_CABLE, null, 2);

const jsonData3 = JSON.stringify(BRAKE_CABLE, null, 2);

const jsonData4 = JSON.stringify(ACC_CABLES, null, 2);

const jsonData5 = JSON.stringify(METER_CABLE, null, 2);

const jsonData6 = JSON.stringify(CHOKE_CABLE, null, 2);

const jsonData7 = JSON.stringify(BRAKE_SHOES, null, 2);

const jsonData8 = JSON.stringify(CLUTCH_PLATES, null, 2);

const jsonData9 = JSON.stringify(PETROL_TANK_LOCK, null, 2);

const jsonData10 = JSON.stringify(Ignition_Lock, null, 2);

// Write the JSON data to a file
fs.writeFileSync("Chain_Spokit.json", jsonData);

fs.writeFileSync("CLUTCH_CABLE.json", jsonData2);

fs.writeFileSync("BRAKE_CABLE.json", jsonData3);

fs.writeFileSync("ACC_CABLES.json", jsonData4);

fs.writeFileSync("METER_CABLE.json", jsonData5);

fs.writeFileSync("CHOKE_CABLE.json", jsonData6);

fs.writeFileSync("BRAKE_SHOES.json", jsonData7);

fs.writeFileSync("CLUTCH_PLATES.json", jsonData8);

fs.writeFileSync("PETROL_TANK_LOCK.json", jsonData9);

fs.writeFileSync("Ignition_Lock.json", jsonData10);

console.log("Conversion complete");
