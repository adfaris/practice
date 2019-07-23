class Tree {
  constructor (data) {
    this.data = data
    this.children = []
  }
  addChild(data) {
    const node = new Tree(data)
    this.children.push(node)
  }
  search (searchTerm) {
    let found = false
    if(this.data === searchTerm) {S
     found = true
    } else  {
      this.children.forEach((child) => {
      if(child === searchTerm) {
        found = true
        }
     })
    }
    return found
  }
}

const tree = new Tree('greeting');
tree.addChild('English');
tree.addChild('Chinese');
tree.children[0].addChild('sup');
tree.children[0].addChild('hey');
tree.children[0].addChild('hello');
tree.children[1].addChild('ni hao');
tree.children[1].addChild('zao an');

console.log(tree.search('zao an'));
console.log(tree.data)
