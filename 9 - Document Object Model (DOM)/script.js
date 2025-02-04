/*
document.body.innerHTML = 'Hello!';
document.title = 'Good job!';
*/
//=======docunemt.title
console.log(document.title); //DOM
document.title = 'change';
console.log(document.title); //change

//=======document.body
console.log(document.body);
console.log(typeof document.body);
console.log(document.body.innerHTML);
// document.body.innerHTML = 'changed'
// document.body.innerHTML = '<button>Good job!</button>';

//======Method
// console.log(document.querySelector('button'));
// console.log(document.querySelector('h1'));
console.log(document.querySelector('button').innerHTML);
document.querySelector('button').innerHTML = 'Changed';

const buttonEliment = document.querySelector('.js-button');
console.log(buttonEliment);

//======window Objects
window.document
window.console.log('window');
// window.alert('hello1')
     // we don't have to type 'window' JavaScript will automatically add it