class LinkedList {
  constructor () {
    this.head = null
  }

  addToTail (data) {
    const node = {
      data: data,
      next: null
    }
    if (this.head === null) {
      this.head = node
    } else {
      while (this.head.next !== null) {
        this.head = this.head.next
      }
      this.head.next = node
    }
  }
}

const list = new LinkedList()
list.addToTail(5)
list.addToTail(15)
list.addToTail(20)
list.addToTail(25)

console.log(list)
