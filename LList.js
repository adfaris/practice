class LinkedList {
  constructor () {
    this.head = null
  }

  addToTail (data) {
    const node = {
      data,
      next: null
    }
    if (this.head === null) {
      this.head = node
    } else {
      let pointer = this.head
      while (pointer.next !== null) {
        pointer = pointer.next
      }
      pointer.next = node
    }
  }
}

const list = new LinkedList()
list.addToTail(5)
list.addToTail(7)
list.addToTail(9)
list.addToTail(11)
list.addToTail(13)

console.log(list)
