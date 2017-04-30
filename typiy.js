/*оголошення змінної*/
var x;
x = 5;

var y = 10;

var resultAdd = x + y;
var resultSub = x - y;
var resultMult = x * y;
var resultDiv = x / y;

console.log ('Додавання: ',resultAdd);
console.log ('Віднімання: ',resultSub);
console.log ('Множення: ',resultMult);
console.log ('Ділення: ',resultDiv);

var firstNumber =  Number(prompt('Enter first number'));
var secondNumber =  Number(prompt('Enter secont number'));

console.log('first Number: ',firstNumber);
console.log('second Number: ',secondNumber);

var Add = firstNumber + secondNumber;
var Sub = firstNumber - secondNumber;
var Mult = firstNumber * secondNumber;
var Div = firstNumber / secondNumber;
var mod = firstNumber % secondNumber;
var inc = ++firstNumber;
var dec = --secondNumber;


console.log ('Add: ',Add);
console.log ('Sub: ',Sub);
console.log ('Mult: ',Mult);
console.log ('Div: ',Div);
console.log ('mod: ',mod);
console.log ('inc: ',inc);
console.log ('dec: ',dec);

var txt1 = 'My first text';
var txt2 = 'My second text';

document.write(txt1 + '<br>' +txt2);
