function myFunction() {
    alert("Hello, world!");
}

function textFunction() {
    document.getElementById("text").style.fontSize = "24pt";
}

function styleFunction() {
    myFunction()
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function reverseFunction() {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function uppercaseFunction() {
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
    var str = document.getElementById("text");
    var parts = str.value.split(".");  // ["How", "are", "you?"]
    str.value = parts.join("-Moo");       // "How_are_you?"
}