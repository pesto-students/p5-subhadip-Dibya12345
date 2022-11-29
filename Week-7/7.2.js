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
    rotateLinkedlist(k) {
        let temp = this.ll;
        let count = 0;
        let prev = null;
        while (count < k) {
            prev = temp;
            temp = temp.next;
            count++;
        }
        prev.next = null;
        this.current = temp;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = this.ll;
        this.ll = this.current;
        this.printList(this.ll);  
    }
    
  }
  
const ll = new LinkedList();
ll.addNode(2);
ll.addNode(4);
ll.addNode(7);
ll.addNode(8);
ll.addNode(9);
console.log("Original Linked List");
ll.printList();
console.log("Rotate Linked List");
ll.rotateLinkedlist(3);