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
 * 深度优先遍历
 * @param {*} root 根节点
 * @param {*} target 需要搜索的节点
 */
function deepSearch(root, target) {
    if (root == null) {
        return false;
    }
    if (root.value == target) {
        return true;
    }
    let left = deepSearch(root.left, target);
    let right = deepSearch(root.right, target);
    return left || right;
}
// console.log(deepSearch(a, "f"));

function wideSearch(rootList, target) {
    if (rootList == null || rootList.length == 0) {
        return false;
    }
    let childList = []; // 当前层节点的所有子节点都在childList中
    for (let i = 0; i < rootList.length; i++) {
        console.log(rootList[i].value);
        if (rootList[i] != null && rootList[i].value == target) {
            return true;
        } else {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return wideSearch(childList, target);
}
console.log(wideSearch([a], "e"));
