const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    #head = new ListNode();
    #currentNode = this.#head;

    getUnderlyingList() {
        return this.#head;
    }

    enqueue(value) {
        if (this.#currentNode.value) {
            this.#currentNode.next = new ListNode(value);
            this.#currentNode = this.#currentNode.next;
        }

        if (!this.#currentNode.value) this.#currentNode.value = value;
    }

    dequeue() {
        const deq = this.#head.value;
        this.#head = this.#head.next;
        return deq;
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue()); // 5
console.log(queue.dequeue()); // 6

module.exports = {
    Queue
};
