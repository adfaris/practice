// Iterative vs recursive insert
class BinarySearchTree {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }

  // insert(data) {
  //   const node = new BinarySearchTree(data);
  //   if (data <= this.data) {
  //     if (this.left === null) {
  //       this.left = node;
  //       return node;
  //     } else {
  //       this.left.insert(data);
  //     }
  //   } else {
  //     if (this.right === null) {
  //       this.right = node;
  //       return node;
  //     } else {
  //       this.right.insert(data);
  //     }
  //   }
  // }
  insert (data) {
    const node = new BinarySearchTree(data)
    let pointer = this

    while (true) {
      if (data <= pointer.data) {
        // go left
        if (pointer.left === null) {
          pointer.left = node
          return node
        } else {
          pointer = pointer.left
        }
      } else {
        // go right
        if (pointer.right === null) {
          // is it null?
          pointer.right = node
          return node
        } else {
          pointer = pointer.right
        }
      }
    }
  }
}

const binarySearchTree = new BinarySearchTree('d')

binarySearchTree.insert('k')
binarySearchTree.insert('f')
binarySearchTree.insert('g')
binarySearchTree.insert('z')

console.log(binarySearchTree)
