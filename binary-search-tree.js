class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		var cur = this.root;
		while (true) {
			if (val < cur.val) {
				if (cur.left === null) {
					cur.left = new Node(val);
					return this;
				} else {
					cur = cur.left;
				}
			} else if (val > cur.val) {
				if (cur.right === null) {
					cur.right = new Node(val);
					return this;
				} else {
					cur = cur.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val, cur = this.root) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		if (val < cur.val) {
			if (cur.left === null) {
				cur.left = new Node(val);
				return this;
			}
			return this.insertRecursively(val, cur.left);
		} else {
			if (cur.right === null) {
				cur.right = new Node(val);
				return this;
			}
			return this.insertRecursively(val, cur.right);
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let curNode = this.root;
		let found = false;

		if (val === curNode.val) return curNode;

		while (curNode && !found) {
			if (val < curNode.val) {
				curNode = curNode.left;
			} else if (val > curNode.val) {
				curNode = curNode.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return curNode;
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, cur = this.root) {
		if (this.root === null) return undefined;
		if (val < cur.val) {
			if (cur.left === null) return undefined;
			return this.findRecursively(val, cur.left);
		} else if (val > cur.val) {
			if (cur.right === null) return undefined;
			return this.findRecursively(val, cur.right);
		}
		return cur;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder() {
		let data = [];
		let cur = this.root;

		function traverse(node) {
			data.push(node.val);
			node.left && traverse(node.left);
			node.right && traverse(node.right);
		}
		traverse(cur);
		return data;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder() {
		let data = [];
		let cur = this.root;

		function traverse(node) {
			node.left && traverse(node.left);
			data.push(node.val);
			node.right && traverse(node.right);
		}
		traverse(cur);
		return data;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder() {
		let data = [];
		let cur = this.root;

		function traverse(node) {
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			data.push(node.val);
		}
		traverse(cur);
		return data;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		let node = this.root;
		let queue = [];
		let data = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
