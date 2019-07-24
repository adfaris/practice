class BinarySearchTree {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
  insert (data) {
    const node = new BinarySearchTree(data)
    if (data <= this.data) {
      if (this.left === null) {
        this.left = node
      } else {
        this.left.insert(data)
      }
    } else {
      if (this.right === null) {
        this.right = node
      } else {
        this.right.insert(data)
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
