class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(x) {
        this.stack1.push(x);
    }
    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) {
            return -1;
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}


let q = new Queue();
let arr = [1 ,2, 1, 3, 1, 4];
for (let i = 0; i < arr.length; i++) {
    q.enqueue(arr[i]);
}
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

