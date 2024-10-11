// returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers — This is an array containing two elements: the two functions that we previously defined.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function.
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers() — This function takes two arguments, an array of drivers and a function.
  const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
  };