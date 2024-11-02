/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("Can't pop from an empty list.");

    let currentNode = this.head;
    let returnNode = this.tail;

    if (currentNode === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // If more than one node
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }

    this.length--;
    return returnNode.val; // Return the poped node value

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("Can't shift from an empty list.");

    let value = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) { 
      this.tail = null;
    }

    return value;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      current = current.next;
      count++;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      current = current.next;
      count++;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let newNode = new Node(val);

    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length) {
      return this.push(val);
    } else {
      let current = this.head;
      let count = 0;

      while (count !== idx - 1) {
        current = current.next;
        count++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.shift();

    let current = this.head;
    let count = 0;

    while (count !== idx - 1) {
      current = current.next;
      count++;
    }

    let removed = current.next;
    current.next = removed.next;

    if (idx === this.length - 1) {
      this.tail = current;
    }

    this.length--;
    return removed.val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
    
  }

  pivot(pivotValue) {
    let lessList = new LinkedList();
    let moreList = new LinkedList();

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val < pivotValue) {
        lessList.push(currentNode.val);
      } else {
        moreList.push(currentNode.val);
      }
      currentNode = currentNode.next;
    }

    if (!lessList.head) {
      this.head = moreList.head;
      this.tail = moreList.tail;
      return;
    }

    lessList.tail.next = moreList.head;
    this.head = lessList.head;
    this.tail = moreList.tail ? moreList.tail : lessList.tail;
  }
}


module.exports = LinkedList;
