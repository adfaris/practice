class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addNode (data) {
    const node = {
      data: data,
      next: null
    }
    if (this.head === null) {
      this.head = node
      this.tail = node
    }
    if (this.head) {
      this.tail.next = node
      this.tail = node
    }
  }
}

const newLlist = new LinkedList()
newLlist.addNode(5)
newLlist.addNode(10)
console.log(newLlist)
