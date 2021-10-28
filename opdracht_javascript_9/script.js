//Functie declaratie

function squareNumbersDeclaration(number1, number2){
    const squaredNumber = (number1 * number1) + (number2 * number2); 
    return squaredNumber * squaredNumber;
}

console.log(squareNumbersDeclaration(5, 8));

//Functie expressie

const squareNumbersExpression = function (number1, number2){

    const squaredNumber = (number1 * number1) + (number2 * number2); 
    return squaredNumber * squaredNumber;
}

console.log(squareNumbersExpression(5, 8));

//Arrow functie

const squareNumbersArrow = (number1, number2) => {

    const squaredNumber = (number1 * number1) + (number2 * number2); 
    return squaredNumber * squaredNumber;
};

console.log(squareNumbersArrow(5, 8));