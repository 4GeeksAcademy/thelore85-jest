console.log('Hello World')

const sum = (a,b) => {
  return a+b
}



const fromEuroToDollar = function(valueInEuro) {
  let valueInDollar = valueInEuro * 1.07;
  return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {
  let valueInDollar = valueInEuro * 156.5;
  return valueInDollar;
}

const fromYenToPound = function(valueInEuro) {
  let valueInDollar = valueInEuro * 0.87;
  return valueInDollar;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


