function someFun() {
    alert("I am changing the element");

    //1. changing the background color to aqua
    var jsClass = document.getElementById('jsClass');
    jsClass.style.backgroundColor = "aqua";

    //2. changing the font-color to red
    var heading = document.getElementById('heading');
    heading.style.color = "red";

}