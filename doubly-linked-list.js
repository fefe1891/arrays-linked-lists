const LinkedList = require('./linked-list');

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
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
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /** add a reverse function */
    reverse() {
        if (!this.head) return;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
        }
    }
}


function mergeSortedList(listA, listB) {
    let currentNodeA = listA.head;
    let currentNodeB = listB.head;

    let newList = new DoublyLinkedList();

    while (currentNodeA !== null && currentNodeB !== null) {
        if (currentNodeA.val < currentNodeB.val) {
            newList.push(currentNodeA.val);
            currentNodeA = currentNodeA.next;
        } else {
            newList.push(currentNodeB.val);
            currentNodeB = currentNodeB.next;
        }
    }

    // If listB is exhausted but listA isn't
    while (currentNodeA !== null) {
        newList.push(currentNodeA.val);
        currentNodeA = currentNodeA.next;
    }
    // If listA is exhausted but listB isn't
    while (currentNodeB !== null) {
        newList.push(currentNodeB.val);
        currentNodeB = currentNodeB.next;
    }

    return newList;
}

module.exports = { DoublyLinkedList, mergeSortedList };


