// fibonacci using iterators
// Author: Dibya Debayan Dash
// Language: javascript
function makeFibonacciIter() {
    let [firstNumber , secondNumber] = [0,1];
    let iterationCount = 0;
    const fibonacciIter = {
        next: function() {
            iterationCount++;
            let result = firstNumber;
            firstNumber = secondNumber;
            secondNumber = result + firstNumber;
            return {value: result, done: true};
        }
    };
    return fibonacciIter;
}
// Construction of the fibonacci iterator
const fibonacciIter = makeFibonacciIter();

console.log(fib.next()); // {value: 0, done: false}
console.log(fib.next()) // {value: 1, done: false}
console.log(fib.next()) // {value: 1, done: false}
console.log(fib.next()) // {value: 2, done: false}
console.log(fib.next()) // {value: 3, done: false}
