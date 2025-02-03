function function1() {
  console.log('Hello!');
  console.log(2 + 2);
}

function1();
function1();

// Parameters
/*
function calculateTax(cost) {
  console.log(cost * 0.1);
}

calculateTax(2000);
calculateTax(5000);
*/

function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost *taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);