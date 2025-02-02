true
false

console.log(typeof true);
console.log(3 < 5);

console.log(5 == '5.00'); //true
console.log(5 === '5.00'); //false



if(true) {
  console.log('hello!'); //true
}

if(false) {
  console.log('hello!'); //this code not run
}

if(false) {
  console.log('hello!');
}else {
  console.log('else');
}



// Practice Question
const age = 18;
if(age >= 18) {
  console.log('you can drive');
} else if (age >= 15) {
   console.log('Almost there!');
}else {
  console.log('you can not drive');
}


// AND Operator &&
console.log(true && true);  // true
console.log(true && false);  // False
console.log(0.2 >= 0 && 0.2 < 1); //true

//OR Operator ||
console.log(true || false); //True
console.log(0.2 >= 0 || 0.2 < 0); //true

//NOT Operator !
console.log(!true); //false
console.log(!false); //true

// Truthy and Falsy valurs
if(5) {
  console.log('truthy');   // Truthy
}

//falsy values: False, 0, '', NuN, undefined, nul. Any value not on this list is truely

if(0) {
  console.log('truthy');  // falsy
}

const cartQuantity = 5

if (cartQuantity) {
  console.log('cart has products');
}

console.log(!0); //true

console.log('text' / 5);  //NaN

let variable1;
console.log(variable1);  //undefined

//Ternary Operators ? :
const result = true ? 'truthy' : 'falsy'
console.log(result); // truthy

const result1 = 0 ? 'truthy' : 'falsy'
console.log(result1); // falsy

//Guard Operator &&
false && console.log('hello!'); //falsy
//when we use (&&) Operator like this it is called Guard Operstor

const message = false && 'hello';
console.log(message); // false

const message1 = 5 && 'hello';
console.log(message1); // hello

//Defult Operator ||
// it is simlar to the guard operator but uses || (OR)
const currency = 'EUR' || 'USD';
console.log(currency); //EUR

const currency1 = undefined || 'USD';
console.log(currency1); //USD