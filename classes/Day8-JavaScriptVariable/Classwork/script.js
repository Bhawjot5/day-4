function someFun() {
    alert("I am changing the element");

    //1. changing the background color to aqua
    var jsClass = document.getElementById('jsClass');
    jsClass.style.backgroundColor = "aqua";

    //2. changing the font-color to red
    var heading = document.getElementById('heading');
    heading.style.color = "red";

}

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