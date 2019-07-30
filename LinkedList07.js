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
  addToHead (data) {
    const node = {
      data: data,
      next: null
      }
      if (this.head === null) {
          this.head = data
      } else {
          let first = this.head;
          while (this.head.next !== null) {
              this.first = data
              first.next = this.head.next
          }
      }
  }
}

const list = new LinkedList()
list.addToTail(5)
list.addToTail(15)
list.addToTail(20)
list.addToTail(25)
list.addToHead(35)

console.log(list)

