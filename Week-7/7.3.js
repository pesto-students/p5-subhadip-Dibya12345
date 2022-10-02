class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next || null;
    }
  }
  
  class LinkedList {
    constructor(...args) {
      this.ll = null;
      this.current = null;
          this.addNode = this.addNode.bind(this);
      if (args.length) {
        args.forEach(this.addNode);
      }
    }
  
    addNode(value) {
      const node = new Node(value);
      if (this.ll === null) {
        this.ll = node;
        this.current = this.ll;
      } else {
        this.current.next = node;
        this.current = node;
      }
    }
  
    printList() {
      let temp = this.ll;
      var printedList = [];
      while (temp !== null) {
        printedList.push(temp.value);
        temp = temp.next;
      }
      console.log(...printedList);
    }
    detectloopLinkedlist(x) {
      let slow = x;
      let fast = x;
      while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
      }
      return false;
    }
        
  }
  
const ll = new LinkedList();
ll.addNode(1);
ll.addNode(3);
ll.addNode(4);
console.log("Original Linked List");
ll.printList();
console.log("Detect loop in Linked List");
ll.detectloopLinkedlist(ll);