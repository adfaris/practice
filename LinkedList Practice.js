class LinkedList {
  constructor () {
    this.head = null
  }

  addToTail (data) {
      const node = {
          data: data, 
          next: null
      }
      if(this.head === null) {
        this.head = node
      } else {
        while(this.head.next !== null) {
          this.head = this.head.next
        }
        this.head.next = data
      }
  }
}