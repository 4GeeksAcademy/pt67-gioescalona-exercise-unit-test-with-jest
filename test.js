// test.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const euros = 1;
    const dollars = fromEuroToDollar(euros);
    const expected = 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    const dollars = 1;
    const yen = fromDollarToYen(dollars);
    const expected = 156.5;
    expect(yen).toBe(expected);
});

test("One yen should be 0.87 pounds", function() {
    const yen = 1;
    const pounds = fromYenToPound(yen);
    const expected = 0.87;
    expect(pounds).toBe(expected);
})