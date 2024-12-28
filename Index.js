

// SQL Query explanation (example)

SQL Query Example:
SELECT 
  employees.name AS EmployeeName, 
  departments.name AS DepartmentName
FROM 
  employees
INNER JOIN 
  departments
ON 
  employees.department_id = departments.id;



// JavaScript Questions

// 1. Mathematical Operations
let num1 = 5; // Using let
var num2 = 25; // Using var
const num3 = 30; // Using const

console.log('Addition:', num1 + num2 + num3);
console.log('Multiplication:', num1 * num2 * num3);
console.log('Division:', num3 / num1);

// 2. Map, Reduce, Filter, and FlatMap examples
const numbers = [5, 10, 15, 20];

// Map: Multiply each number by 2
const multiplied = numbers.map(num => num * 2);
console.log('Map:', multiplied);

// Filter: Get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Filter:', evenNumbers);

// Reduce: Calculate sum of numbers
const totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Reduce:', totalSum);

// FlatMap: Flatten nested arrays and multiply by 3
const nestedArray = [[1], [2, 3], [4]];
const flatMapped = nestedArray.flatMap(arr => arr.map(x => x * 3));
console.log('FlatMap:', flatMapped);

// 3. Callback Function Example
function getData(callback) {
  setTimeout(() => {
    callback('Callback executed: Data fetched!');
  }, 1500);
}
getData(message => console.log(message));

// 4. Reverse a String
function reverseStr(input) {
  return input.split('').reverse().join('');
}
console.log('Reversed String:', reverseStr('JavaScript'));

// Starting the servers
server.listen(3000, () => {
  console.log('Node.js HTTP Server is running on port 3000');
});

app.listen(4000, () => {
  console.log('Express server is running on port 4000');
});

// Fetch data examples
fetchDataWithPromises();
fetchDataWithAsyncAwait();
