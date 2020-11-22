console.log("hello");
// alert("hello");
// alert("yo");


var b = "smoothie"
console.log(b);

var sum = 45;
console.log(sum);
var age = prompt("what is your age?");
document.getElementById("some").innerHTML = age;

var num = 1;
num = num + 10;
console.log(num);
// reminder
console.log(num % 20);



// function
function fun(){
    alert("warning");
    var you = prompt("who are you?");
    document.getElementById("some").innerHTML = you;
}
// fun();

function greet() {
    var name = prompt("what is your name");
    var result = "hello" + " " + name;
    console.log(result);
    document.getElementById("some").innerHTML = result;
}
// greet();


function sumi(num1, num2) {
    var sub = num1 + num2;
    console.log(sub);
}
sumi(10, 12);

function funi(){
    var name = prompt("enter your name");
    console.log(name);
    document.getElementById("some").innerHTML = name;
}

funi();