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

  search (searchValue) {
    if (this.head === null) return false
    while (this.head != null) {
      if (this.head.data === searchValue) return true
      this.head = this.head.next
    }
    return false
  }
}

const newLlist = new LinkedList()
newLlist.addNode(5)
newLlist.addNode(10)
console.log(newLlist)
console.log(newLlist.search(5))
