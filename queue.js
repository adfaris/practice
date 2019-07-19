class Queue {
  constructor () {
    this._storage = []
  }

  enqueue (item) {
    this._storage.push(item)
  }

  get size () {
    return this._storage.length
  }

  dequeue () {
    return this._storage.shift()
  }
  isEmpty () {
    return this._storage.length === 0
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.isEmpty())
console.log(queue.size)

queue.dequeue()

console.log(queue)
