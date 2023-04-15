const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
    }, null);
}

function removeKFromList(l, k) {
    let head = l;
    let prevNode = head;
    let currentNode = head.next;

    while (head?.value === k || prevNode?.value) {
        if (head.value === k) {
            head = head?.next;
            prevNode = head;
            currentNode = head?.next;
        }

        if (currentNode?.value === k) {
            prevNode.next = currentNode.next;
            currentNode = currentNode?.next;
        }

        if (currentNode?.value !== k) {
            prevNode = currentNode;
            currentNode = currentNode?.next;
        }
    }

    return head;
}

console.log(removeKFromList(convertArrayToList([ 3, 3, 3, 3, 3, 3 ]), 3));

module.exports = {
    removeKFromList
};
