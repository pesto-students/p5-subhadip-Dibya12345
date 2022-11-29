// create a custom promise in javascript
// Create a customPromise

class customPromise {
    constructor(executor) {
        this.promiseResult = '';
        this.promiseStatus = 'pending';
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    then(onFulfilled) {
        this.onFulfilled = onFulfilled;
    }

    catch(onRejected) {
        this.onRejected = onRejected;
    }

    resolve(value) {
        this.promiseResult = value;
        this.promiseStatus = 'fulfilled';
        this.onFulfilled(value);
    }

    reject(reason) {
        this.promiseResult = reason;
        this.promiseStatus = 'rejected';
        this.onRejected(reason);
    }
}


// Creating a custom promise object
var number = Math.floor(Math.random() * 100);
console.log('The number is '+number);
let customPromise = new CustomPromise((resolve, reject) => {
    if (number % 5 === 0) {
        reject('The number is divisible by 5 😒');
    } else {
        resolve('The number is not divisible by 5 😊');
    }
});
customPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});