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
      if (head === null) {
        this.head = head
        this.tail = head
      } else {
          this.tail.next = node
          this.tail = node
      }
  }
}

