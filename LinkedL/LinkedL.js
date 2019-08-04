class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }
  addNode (data) {
    const node = {
      data,
      next: null
    }
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
}
