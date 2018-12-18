const driver = { 
  name:'Ralph', 
  address:'10 Broadway', 
}

function updateDriverWithKeyAndValue(driver,key, value) {
 const updatedDriver = {
   name:'Sam',
   address:'11 Broadway',
 }
 return updatedDriver
}

function destructivelyUpdateDriverWithKeyAndValue (driver,key,value) {
 driver[key]=value
  driver.name='Sam';
  driver.address= '12 Broadway'
  {return driver}
}

function deleteFromDriverByKey () {
const updatedDriver = {
   name:'Sam',
   address:'11 Broadway',
 }
 const newDriver = Object.assign({}, updatedDriver)
 delete newDriver.name
 return newDriver
}

function destructivelyDeleteFromDriverByKey () {
 delete driver.name
 return driver
}