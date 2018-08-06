function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase());
};

function splitToObj (driver){
  let splitDri= driver.split(" "); 
  return {firstName: splitDri[0], lastName: splitDri[1]};
};

function nameToAttributes(drivers){
  return drivers.map(driver => splitToObj(driver));
};

function attributesToPhrase(drivers){
  return drivers.map(desc => desc.name + " is from " + desc.hometown);
}