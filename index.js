// Write your solution in this file!

const driver = {name: "Sam"};

//Not destructive
function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
}

//Destructive
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

//Not destructive
function deleteFromDriverByKey(obj, key) {
  const newdriver = {...obj};
  delete newdriver[key];
  return newdriver;
}

//Destructive
function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key];
}