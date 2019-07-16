class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(data) {
      const node = {
        data,
        next: null
      };
  
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      }
  
      if (this.head) {
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    // search(searchValue) { // 25 - true // 26 - false
    //   if (this.head === null) return false;
  
    //   let pointer = this.head;
    //   while (pointer !== null) {
    //     if (pointer.data === searchValue) return true;
    //     pointer = pointer.next;
    //   }
  
    //   return false;
    // }
  
    search(searchValue) {
      // base case - body to execute - move towards the base case
      const nodeRefs = [];
  
      function searchList(node) {
        if (node === null) return;
        if (node.data === searchValue) nodeRefs.push(node);
        searchList(node.next);
      }
      searchList(this.head);
  
      return nodeRefs;
    }
  }
  
  const list = new LinkedList();
  console.log(list.search(15));
  list.addNode(5);
  list.addNode(20);
  list.addNode(10);
  list.addNode(20);
  list.addNode(15);
  list.addNode(20);
  list.addNode(25);
  list.addNode(30);
  list.addNode(20);
  
  console.log(list.search(20));