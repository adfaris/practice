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

const list = new LinkedList()
list.addToTail(1)
list.addToTail(2)
list.addToTail(3)
list.addToTail(4)
list.addToTail(5)

console.log(list)