// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
 const newDriver = Object.assign({}, driver, {[key]: value});
 
//  newDriver[key] = value;
  
  return newDriver; 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;

 // driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key, value) {
const newDriver = Object.assign({}, driver);
 
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
const newDriver = Object.assign({}, driver);

  delete newDriver[key];
  
  newDriver;
  
  driver;

  return Object.assign(driver, {[key]: value});
}