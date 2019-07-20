class LinkeList {
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
    let first = this.head
    while (first != null) {
      if (first.data === searchValue) return true
      first = first.next
    }
    return false
  }
}
const list = new LinkeList()
list.addNode(5)
list.addNode(10)
list.addNode(15)
list.addNode(20)
console.log(list)
console.log(list.search(12))
