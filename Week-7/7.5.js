function nextLargerElement(arr, n) {
    let stack = [];
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
}

let arr = [1, 3, 2, 4];
let n = arr.length;
console.log(nextLargerElement(arr, n));

// Time Complexity: O(n)
