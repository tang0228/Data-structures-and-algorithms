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


function wideSearch(nodes, target, path) {
    if (nodes == null || nodes.length == 0) {
        return false;
    }
    let nodeChilds = [];
    for (let i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) > -1) {
            continue;
        }
        path.push(nodes[i]);
        if (nodes[i].value == target) {
            return true;
        } else {
            nodeChilds = nodeChilds.concat(nodes[i].neighbour);
        }
    }
    return wideSearch(nodeChilds, target, path);
}
console.log(wideSearch([c], 'k', []));