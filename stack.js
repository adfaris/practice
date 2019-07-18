class Stack {
  constructor () {
    this._storage = []
  }

  add (item) {
    this._storage.push(item)
  }

  get size () {
    return this._storage.length
  }

  remove () {
    return this._storage.pop()
  }
}

const stack = new Stack()

stack.add(5)
stack.add(7)
stack.add(9)

console.log(stack.size)

stack.remove()

console.log(stack)
