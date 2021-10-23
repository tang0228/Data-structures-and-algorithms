function Node(value) {
    this.value = value;
    this.neighbour = [];
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.neighbour.push(b);
a.neighbour.push(c);
a.neighbour.push(f);

b.neighbour.push(a);
b.neighbour.push(d);
b.neighbour.push(e);

c.neighbour.push(a);

d.neighbour.push(b);

e.neighbour.push(b)

