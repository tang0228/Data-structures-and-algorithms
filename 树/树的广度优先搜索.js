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

function wideSearch(roots, target) {
    if (roots == null || roots.length == 0) {
        return false;
    }
    let childs = [];
    for (let i = 0; i < roots.length; i++) {
        if (roots[i].value == target) {
            return true;
        } else {
            childs = childs.concat(roots[i].childs);
        }
    }
    return wideSearch(childs, target);
}
console.log(wideSearch([a], "k"));