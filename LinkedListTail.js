class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail (data) {
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

const list = new LinkedList()
list.addToTail(20)
list.addToTail(30)
list.addToTail(40)
list.addToTail(50)

console.log(list)