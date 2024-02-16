//Q1
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inOrder(root) {
    let current = this.root;
    let stack = [];
    let result = [];

    while(current !== null || stack.length > 0){
        while(current !== null){
            stack.push(current);
            current = current.left;
        }    
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }
    return result;
}

let current = new Node(1);
current.left = new Node(2);
current.right = new Node(3);
current.left.left = new Node(4);
current.left.right = new Node(5);

console.log(inOrder());

//Q2
function inorder(root)
{
    if (root == null)
        return;
  
    inorder(root.left);
  
    document.write(root.data + " ");
  
    inorder(root.right);
}
 
function isIdentical(root1,root2)
{
    if (root1 == null && root2 == null)
        return 1;
    else if (root1 != null &&
             root2 == null)
        return 0;
    else if (root1 == null &&
             root2 != null)
        return 0;
    else
    {

        if (root1.data == root2.data &&
            isIdentical(root1.left, root2.left) == 1 &&
            isIdentical(root1.right, root2.right) == 1)
            return 1;
        else
            return 0;
    }
}
 
let root1 = new Node(5);
    let root2 = new Node(5);
    root1.left = new Node(3);
    root1.right = new Node(8);
    root1.left.left = new Node(2);
    root1.left.right = new Node(4);
  
    root2.left = new Node(3);
    root2.right = new Node(8);
    root2.left.left = new Node(2);
    root2.left.right = new Node(4);
  
    if (isIdentical(root1, root2)==1)
        document.write("Both BSTs are identical");
    else
        document.write("BSTs are not identical");

//Q3
function countNodes(tree) {
    if (tree === null) {
      return 0;
    }
    let leftNodes = countNodes(tree.left);
    let rightNodes = countNodes(tree.right);
  
    return leftNodes + rightNodes + 1;
  }
  
  let root = new Node(10);
  root.left = new Node(11);
  root.right = new Node(12);
  root.left.left = new Node(13);
  root.left.right = new Node(14);
  root.right.left = new Node(15);
  root.right.right = new Node(16);
  
  console.log("Question 3:", countNodes(root));

  //Q4
  class NodeWithDepth {
    constructor(node, depth) {
      this.node = node;
      this.depth = depth;
    }
  }
  
  function searchBottomLeftValue(root) {
    if (root == null) {
      return;
    }
    let stack = [];
    let answer = null;
    stack.push(new NodeWithDepth(root, 0));
    while (stack.length !== 0) {
      let current = stack.shift();
      let node = current.node;
      let depth = current.depth;
  
      if (!node.left && !node.right) {
        if (!answer || depth > answer.depth) {
          answer = node;
        }
      }
  
      if (node.left != null) {
        stack.push(new NodeWithDepth(node.left, depth + 1));
      }
      if (node.right != null) {
        stack.push(new NodeWithDepth(node.right, depth + 1));
      }
    }
    return answer.data;
  }
  
  let treeRoot = new Node(2);
  treeRoot.left = new Node(1);
  treeRoot.right = new Node(3);
  treeRoot.left.left = new Node(4);
  treeRoot.right.left = new Node(5);
  treeRoot.right.left.left = new Node(6);
  treeRoot.left.left.left = new Node(7);
  console.log(searchBottomLeftValue(treeRoot));