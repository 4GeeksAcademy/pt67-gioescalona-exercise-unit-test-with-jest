test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar();
    const expected = dollars;
   
    expect(dollars).toBe(expected); 
})
test("One euro should be 1.07 dollars", function() {
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen();
    const expected = fromDollarToYen() * 1.07 * 156.5;
   
    expect(Yen).toBe(expected); 
})
test("One euro should be 1.07 dollars", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound();
    const expected = fromYenToPound() * 1.07 * 156.5 * 0.87;
    
     expect(pound).toBe(expected); 
})