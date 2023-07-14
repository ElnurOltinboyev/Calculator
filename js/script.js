let input = document.getElementById("screen");

// biritinchi kiritiladigan sonni yozish uchun
let numberOne = 0;

// amalni javascriptga olib kelish
let getAmal = "";

// haqiqiy amalni yig'ib turish uchun
let selectAmal = "";

function addNumber(number) {

    if (input.value.indexOf(".") !== -1 && number === "." ){

    } else if (input.value === "0" && number !== "." || getAmal.length>0){
        input.value = number;
        getAmal = "";
    } else {
        input.value+=number;
    }

}

function Action (amal) {
    getAmal = amal;
    selectAmal = amal;
    numberOne  = input.value;
}

function equal () {
    let numberTwo = input.value;
    let result = 0;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    if (selectAmal === "plus"){
        result = numberOne+numberTwo;
    }else if (selectAmal === "minus"){
        result = numberOne-numberTwo;
    }else if (selectAmal === "divide"){
        if (numberTwo === 0){
            result.toString();
            result = "Cannot divide by zero!";
        }else{
            result = numberOne/numberTwo;
        }
    }else if (selectAmal === "multiply"){
        result = numberOne*numberTwo;
    }else if (selectAmal === "percent") {
        result = numberOne % numberTwo;
    }

    input.value = result;
}

function dellAll(){
    input.value = 0;
}

function backspace(){
    input.value = input.value.toString().slice(0, -1);
}

function degree(){
    input.value = input.value**2;
}

function root(){
    input.value = Math.sqrt(input.value);
}

document.addEventListener("keydown",function (event) {
    if (event.keyCode === 49){
        addNumber(1);
    }else if (event.keyCode === 50){
        addNumber(2);
    }else if (event.keyCode === 51){
        addNumber(3);
    }else if (event.keyCode === 52){
        addNumber(4);
    }else if (event.keyCode === 53){
        addNumber(5);
    }else if (event.keyCode === 54){
        addNumber(6);
    }else if (event.keyCode === 55){
        addNumber(7);
    }else if (event.keyCode === 56){
        addNumber(8);
    }else if (event.keyCode === 57){
        addNumber(9);
    }else if (event.keyCode === 48){
        addNumber(0);
    }else if (event.keyCode === 107){
        Action("plus");
    }else if (event.keyCode === 189){
        Action("minus");
    }else if (event.keyCode === 191){
        Action("divide");
    }else if (event.keyCode === 106){
        Action("multiply")
    }else if (event.keyCode === 187){
        equal();
    }else if (event.keyCode === 8) {
        backspace();
    }else if (event.keyCode === 67){
        dellAll();
    }else if (selectAmal === document.getElementById("percent")){
        Action("percent")
    }else if (input.value === document.getElementById("double")){
        addNumber("00");
    }else if (event.keyCode === 190){
        addNumber(".");
    }
});