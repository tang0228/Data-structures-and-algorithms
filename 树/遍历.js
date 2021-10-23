function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

/**
 * 前序遍历
 * @param {*} root 根节点
 */
function f1(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    f1(root.left);
    f1(root.right);
}

/**
 * 中序遍历
 * @param {*} root 根节点
 */
function f2(root) {
    if (root == null) {
        return;
    }
    f2(root.left);
    console.log(root.value);
    f2(root.right);
}

/**
 * 后续遍历
 * @param {*} root 根节点
 */
function f3(root) {
    if (root == null) {
        return;
    }
    f3(root.left);
    f3(root.right);
    console.log(root.value);
}
f3(a);
