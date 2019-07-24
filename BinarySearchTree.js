class BinaryTree {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
  //   addLeft (data) {
  //     const node = new BinaryTree(data)
  //     this.left = node
  //   }
  //   addRight (data) {
  //     const node = new BinaryTree(data)
  //     this.right = node
  //   }
  insert (data) {
    const node = new BinaryTree(data)
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

const binaryTree = new BinaryTree('Greeting')
// binaryTree.addLeft('Chinese')
// binaryTree.addRight('English')
// binaryTree.left.addLeft('Ni Hao')
// binaryTree.left.addRight('Zao')
// binaryTree.right.addLeft('Hello')
// binaryTree.right.addRight('Hi')
binaryTree.insert('Chinese')
binaryTree.insert('English')
binaryTree.insert('Ni Hao')
binaryTree.insert('Hello')
binaryTree.insert('Hi')
console.log(binaryTree)
