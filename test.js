// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});



// test 
test("One euro should be 1.07 dollars", function() {
  const { fromEuroToDollar } = require('./app.js');
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07; 
  
   expect(dollars).toBe(expected); 
})


// test
test("One e should be 1.07 dollars", function() {
  const { fromDollarToYen } = require('./app.js');
  const dollars = fromDollarToYen(3.5);
  const expected = 3.5 * 156.5; 
  
   expect(dollars).toBe(expected); 
})


//test

test("One euro should be 1.07 dollars", function() {
  const { fromYenToPound } = require('./app.js');
  const dollars = fromYenToPound(3.5);
  const expected = 3.5 * 0.87; 
  
   expect(dollars).toBe(expected); 
})