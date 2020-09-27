
// var a = 15;
// var b = 20;
// var c = a+b;

// we use console.log to check the values inside the variable
// console.log(c);
// var result = document.getElementById('result');
// result.innerHTML = c;

// step 1 : create an Html -- done
// Step 2 : Create a function -- done
// Step 3 : Get the input values -- done
// Step 4 : perform some operation -- done
// Step 5 : Show the output -- 

function add() {
    var value1 = parseFloat(document.getElementById('add_value1').value);
    var value2 = parseFloat(document.getElementById('add_value2').value);
    // console.log("value 1 " + value1);
    var result = value1 + value2;
    console.log("Results " + result);

    var output = document.getElementById('add_result');
    output.innerHTML = result;

}   


function sub() {
    var value3 = parseFloat(document.getElementById('sub_value3').value);
    var value4 = parseFloat(document.getElementById('sub_value4').value);
// console.log("value 1 " - value1);
var result = value3 - value4;
console.log("Results " - result);
var output = document.getElementById('sub_result');
output.innerHTML = result;

}

function div() {
    var value5 = parseFloat(document.getElementById('div_value5').value);
    var value6 = parseFloat(document.getElementById('div_value6').value);
// console.log("value 1 " / value1);
var result = value5 / value6;
console.log("Results " / result);
var output = document.getElementById('div_result');
output.innerHTML = result;

}

function mul() {
    var value7 = parseFloat(document.getElementById('mul_value7').value);
    var value8 = parseFloat(document.getElementById('mul_value8').value);
// console.log("value 1 " * value1);
var result = value7 * value8;
console.log("Results " * result);
var output = document.getElementById('mul_result');
output.innerHTML = result;

}




















// function someFun() {
//     alert("I am changing the element");

//     //1. changing the background color to aqua
//     var jsClass = document.getElementById('jsClass');
//     jsClass.style.backgroundColor = "aqua";

//     //2. changing the font-color to red
//     var heading = document.getElementById('heading');
//     heading.style.color = "red";

// }

/**
 * 
 * Math elements:
 * 1. Constants : anything that we cannot change; no updation allowed;
 * 2. variables : anything that we can change according to our requirement; 
 * A = 10 
 * B = 5
 * C = A + B 
 * C = 15
 * 
 * A = 20
 * C = A - B
 * C = 15
 * 
 * B = 40
 * 
 * C = A * B
 * C = 800
 * 
 * C = C * A
 * C = 16000
 * 
 * What are the variables ?
 * A, B and C are the variables, because they are getting changed after each operation/case.
 * 
 * Types of variables ?
 * 1. Independent variable 
 * 2. Dependent variable
 * 
 * A = Independent
 * B = Independent 
 * C = Dependent
 * 
 * 1. What is variable in JavaScript?
 * Ans : variables in JavaScript are memory blocks. Wherein we put numbers, characters, etc.
 * 
 *  
 *  
 *
 */