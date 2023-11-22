const convertToCelsius = function(number) {
  let result = (number - 32)* (5/9);
  result = Math.round(result * 10);
  
  return result / 10;
};

const convertToFahrenheit = function(number) {
  let result = number * (9/5) + 32;
  result = Math.round(result * 10);
  
  return result /10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
