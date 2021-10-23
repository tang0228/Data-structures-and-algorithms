let arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}
let num1 = 0;
function get(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        num1 += 1;
        if (arr[i] == target) {
            return true;
        }
    }
    return false;
}

console.log(get(arr, 1000));
console.log(num1);
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if (root == null) {
        return;
    }
    if (root.value == num) {
        return;
    }
    if (root.value < num) {
        if (root.right != null) {
            addNode(root.right, num);
        } else {
            root.right = new Node(num);
        }
    } else {
        if (root.left != null) {
            addNode(root.left, num);
        } else {
            root.left = new Node(num);
        }
    }
}

function buildTree(arr) {
    if (arr == null || arr.length == 0) {
        return null;
    }
    let root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

let num2 = 0;
function search(root, target) {
    if (root == null) {
        return false;
    }
    num2 += 1;
    if (root.value == target) {
        return true;
    } else if (root.value > target) {
        return search(root.left, target)
    } else {
        return search(root.right, target)
    }
}
const root = buildTree(arr);
console.log(search(root, 1000));
console.log(num2);