const convertToCelsius = function(temp) {
  let convert = ((temp - 32) * 5) / 9;
  convert = Math.round(convert * 10) / 10;
  return convert;

};

const convertToFahrenheit = function(temp) {
  let convertFarenheit = temp * 9/5 + 32;
  convertFarenheit = Math.round(convertFarenheit * 10) / 10;
  return convertFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
