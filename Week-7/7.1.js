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

    reverseLinkedlist() {
        let prev = null;
        let current = this.ll;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.ll = prev;
        this.printList(this.ll);
    }
    
  }
  
const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.addNode(6);
console.log("Original Linked List");
ll.printList();
console.log("Reversed Linked List");
ll.reverseLinkedlist();