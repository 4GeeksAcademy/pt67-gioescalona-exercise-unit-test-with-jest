const fromEuroToDollar = function(valueInEuro)  {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar)  {
    let  valeuInYen = valueInDollar * 1.07 * 156.5;
    return valeuInYen;
}
 
const fromYenToPound = function(valeuInYen)  {
    let valueInPound = valeuInYen * 1.07 * 156.5 * 0.87;
    return valueInPound;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};