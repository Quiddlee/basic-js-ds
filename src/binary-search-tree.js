const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    #tree = [];

    root() {
        const head = { data: this.#tree[0] };
        return head.data ? head : null;
    }

    add(data) {
        this.#tree.push(data);
    }

    has(data) {
        return this.#tree.includes(data);
    }

    find(data) {
        const node = { data: this.#tree.find(value => value === data) };
        return node.data ? node : null;
    }

    remove(data) {
        return this.#tree.splice(this.#tree.indexOf(data), 1);
    }

    min() {
        return Math.min(...this.#tree) || null;
    }

    max() {
        return Math.max(...this.#tree) || null;
    }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(3);
tree.add(4);
console.log(tree.root().data); // 2

module.exports = {
    BinarySearchTree
};