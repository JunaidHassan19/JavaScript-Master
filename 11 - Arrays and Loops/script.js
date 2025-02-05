const myArray =  [10, 20, 30];
console.log(myArray);

console.log(myArray[0]); // first value 10
console.log(myArray[1]); //20
console.log(myArray[2]); //third value 30
myArray[0] = 99 //change the 0 value to 99
console.log(myArray);

const newArray = [
  11,
  22,       //multiple line Array
  33
  ];

console.log(newArray);

[1, 'HEllo', true, {name: 'John'}, [1,2]] //Array with different data types

console.log(typeof[1,2]);
console.log(Array.isArray([1,2])); //true

//==========Array Properties==========
//   .length
console.log(myArray.length); //3

//   .push()
myArray.push(40); //add 40 to the end of the array
console.log(myArray);

//   .splice()
myArray.splice(4, 9); //remove 4 element from index 9
console.log(myArray);

//   .pop() remove the last element
myArray.pop();
console.log(myArray);

//========Loops==========
//      while loop
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//      for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//=======Looping through an Array=======
const todoList = [
  'Learn JavaScript', //index 0
  'Learn React',      //index 1
  'Build Projects'    //index 2
];

for(let index = 0; index <= todoList.length - 1; index++) {
 const value = todoList[index];
  console.log(value);
}

//=====Accuminator Pattern=====
/*
Problem
We have an array of numbers:[1, 1, 3]
How do we calculate the total?
*/
const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}
console.log(total);




/*
Generate random nombers
 until one that's at least 0.5
*/
let randomNumber = 0;

while ( randomNumber <= 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);

          