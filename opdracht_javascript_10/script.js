const checkAge = function(age){

    return age >= 18 ? true : false;

};

const greeting = function(age){

    const adult = checkAge(age);

    return adult ? "Hello there" : "Hey kiddo"; 
}; 

console.log(greeting(17)); //Hey kiddo
console.log(greeting(18)); //Hello there

//VAT exercise 1

const vatCalculation = function(basePrice, vatPercentage) {

    console.log("Entering vatCalculation. Baseprice: ", basePrice, "vatpercentage: ", vatPercentage);
    const result = basePrice * (vatPercentage / 100);
    //console.log("VAT amount: ", result);
    return result;
};


const priceCalculation = function(basePrice, vatPercentage){

    console.log("Entering priceCalculation. Baseprice: ", basePrice, "vatpercentage: ", vatPercentage);
    const result = vatCalculation(basePrice, vatPercentage) + basePrice;
    //console.log("Price including VAT: ", result);
    return result;
};

console.log(priceCalculation(1000, 21)); //1210
console.log(priceCalculation(2, 9)); //2.18

//VAT exercise 2

const basePriceCalculation = function(amountIncludingVat, vatPercentage){

    console.log("Entering basePriceCalculation. amountIncludingVat: ", amountIncludingVat, "vatpercentage: ", vatPercentage);
    const basePrice = amountIncludingVat / ((100 + vatPercentage) / 100);
    //console.log("basePrice: ", basePrice);
    return basePrice;
};

const basePriseAndVatAmountCalculation = function(amountIncludingVat, vatPercentage){

    console.log("Entering basePriseAndVatAmountCalculation. amountIncludingVat: ", amountIncludingVat, "vatpercentage: ", vatPercentage);
    const basePrice = basePriceCalculation(amountIncludingVat, vatPercentage);
    //console.log("basePrice: ", basePrice);
    const vat = amountIncludingVat - basePrice;
    //console.log("vat: ", vat);
    return [basePrice, vat];
};

console.log(basePriseAndVatAmountCalculation(1210, 21)); //[ 1000, 210 ]
console.log(basePriseAndVatAmountCalculation(2.18, 9)); //[ 2 , 0.180000000000000016]