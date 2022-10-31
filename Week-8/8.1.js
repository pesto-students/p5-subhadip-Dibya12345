class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
let root;

function maxDepth(node) {
    if (node == null)
        return -1;
    else {
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);
        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}
root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.left.left = new Node(null);
// root.right = new Node(null);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log("Height of tree is : " + maxDepth(root));

/*
Output:- Height of tree is : 3
*/