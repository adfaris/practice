class BinaryTree {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
    addLeft(data) {
      const node = new BinaryTree(data);
      this.left = node;
    }
    addRight(data) {
      const node = new BinaryTree(data);
      this.right = node;
    }
  }
  
  const binaryTree = new BinaryTree('Greeting');
  binaryTree.addLeft('Chinese');
  binaryTree.addRight('English');
  binaryTree.left.addLeft('Ni Hao');
  binaryTree.left.addRight('Zao');
  binaryTree.right.addLeft('Hello');
  binaryTree.right.addRight('Hi');
  
  console.log(binaryTree);