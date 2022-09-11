// create a custom promise in javascript
// Create a customPromise
class CustomPromise {
    constructor(executor) {
        this.executor = executor;
        this.promise = new Promise(executor);
    }

    then(onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            this.promise.then((result) => {
                if (onFulfilled) {
                    resolve(onFulfilled(result));
                } else {
                    resolve(result);
                }
            }, (error) => {
                if (onRejected) {
                    resolve(onRejected(error));
                } else {
                    reject(error);
                }
            });
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
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