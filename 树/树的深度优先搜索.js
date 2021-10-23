function Node(value) {
    this.value = value;
    this.childs = [];
}

const a = new Node("a");
const c = new Node("c");
const f = new Node("f");
const b = new Node("b");
const d = new Node("d");
const e = new Node("e");

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root, target) {
    if (root == null) {
        return false;
    }
    if (root.value == target) {
        return true;
    }
    let result = false;
    for (let i = 0; i < root.childs.length; i++) {
        result |= deepSearch(root.childs[i], target);
    }
    return result ? true : false;
}
console.log(deepSearch(a, "k"));
