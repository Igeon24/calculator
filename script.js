let displayScreen = document.querySelector(".display");
displayScreen.textContent = "";

let firstNumber = 0;
let secondNumber = 0;
let operatorSelected  = "+"; 

function add(number1,number2){
    return number1 + number2;
}

function subtract(number1,number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    if (number2 === 0){
        return "Loool";
    }
    return number1 / number2;
}








function operate(n1,n2,operator){
    let result = 0;
    if (operator === "+"){
        result = add(n1,n2);
    }else if (operator === "-"){
        result = subtract(n1,n2);
    }else if (operator === "/"){
        result = divide(n1,n2);
    }else if (operator === "*"){
        result = multiply(n1,n2);
    }
    return result;
}

let allNumbersButtons = document.querySelectorAll(".btn");
allNumbersButtons.forEach((number)=>{
    number.addEventListener("click",()=>{
        displayScreen.textContent = displayScreen.textContent + number.textContent;
    });
})


let allOperatorsButtons = document.querySelectorAll(".operator");
allOperatorsButtons.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        if(operator != ""){
            firstNumber =  +displayScreen.textContent;
            displayScreen.textContent = "";
            operatorSelected = operator.textContent;
        };
    });
});

let equalButton = document.querySelector(".equal");
equalButton.addEventListener("click",()=>{
    if( operatorSelected != ""){
        secondNumber = +displayScreen.textContent;
        displayScreen.textContent = operate(firstNumber,secondNumber,operatorSelected);
        resetAll();
    }
});

function resetAll(){
    firstNumber = 0;
    secondNumber = 0;
    operatorSelected = "";
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click",()=>{
    firstNumber = 0;
    secondNumber = 0;
    operatorSelected = "";
    displayScreen.textContent = "";
});

let backspaceButton = document.querySelector(".back");
backspaceButton.addEventListener("click",()=>{
    let content = displayScreen.textContent;
    content = content.split("");
    content.pop();
    displayScreen.textContent = content.join("");


})


let dotButton = document.querySelector(".dot");
dotButton.addEventListener("click",()=>{
    let content = displayScreen.textContent.split("");
    if (content.includes(".") === false){
        displayScreen.textContent = displayScreen.textContent + ".";
    }

})