const { DoublyLinkedList, mergeSortedList } = require('./doubly-linked-list');


describe("Doubly Linked List", function() {
    it("creates a new list successfully", function() {
        let dl = new DoublyLinkedList();
        expect(dl.length).toBe(0);
    });

    it("pushes nodes successfully", function() {
        let dl = new DoublyLinkedList();
        dl.push(5);
        expect(dl.length).toBe(1);
        expect(dl.head.val).toBe(5);
        expect(dl.tail.val).toBe(5);
    });

    it("unshifts nodes successfully", function() {
        let dl = new DoublyLinkedList();
        dl.unshift(3);
        expect(dl.length).toBe(1);
        expect(dl.head.val).toBe(3);
        expect(dl.tail.val).toBe(3);
    });

    it("reverses the list successfully", function() {
        let dl = new DoublyLinkedList([1,2,3]);
        dl.reverse();
        expect(dl.head.val).toBe(3);
        expect(dl.tail.val).toBe(1);
    });
});

describe("Merge Sorted List", function() {
    it("merges two sorted lists successfully", function() {
        let list1 = new DoublyLinkedList([1, 3, 5]);
        let list2 = new DoublyLinkedList([2, 4, 6]);
        let mergedList = mergeSortedList(list1, list2);
        let currentNode = mergedList.head;
        let i = 1;

        while (currentNode) {
            expect(currentNode.val).toBe(i);
            i++;
            currentNode = currentNode.next;
        }
    });
});

module.exports = { DoublyLinkedList, mergeSortedList };