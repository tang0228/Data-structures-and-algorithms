function Node(value) {
    this.value = value;
    this.neighbour = [];
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.neighbour.push(b);
a.neighbour.push(c);
b.neighbour.push(a);
b.neighbour.push(c);
b.neighbour.push(d);
c.neighbour.push(a);
c.neighbour.push(b);
c.neighbour.push(d);
d.neighbour.push(b);
d.neighbour.push(c);
d.neighbour.push(e);
e.neighbour.push(d);

function deepSearch(root, target, path) {
    if (root == null) {
        return false;
    }
    if (path.indexOf(root) > -1) {
        return false;
    }
    if (root.value === target) {
        return true;
    }
    path.push(root);
    let result = false;
    for (let i = 0; i < root.neighbour.length; i++) {
        result |= deepSearch(root.neighbour[i], target, path);
    };
    return result ? true : false;
}
console.log(deepSearch(c, "c", []));


