function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const node2 = new Node("2");
const node3 = new Node("3");
const node5 = new Node("5");
const node6 = new Node("6");

node2.left = node5;
node5.left = node3;
node5.right = node6;

// 获取树的深度
function getDeep(root) {
    if (root == null) {
        return 0;
    }
    let left = getDeep(root.left);
    let right = getDeep(root.right);
    return Math.max(left, right) + 1;
}

/**
 * 判断一棵树是不是平衡二叉树
 * @param {} root 
 * @returns 
 */
function isBalance(root) {
    if (root == null) {
        return true;
    }
    let left = getDeep(root.left);
    let right = getDeep(root.right);
    if (Math.abs(left - right) > 1) {
        // 不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

// 左旋
function leftRotate(root) {
    // 得到新根
    let newRoot = root.right;
    // 得到变化节点
    let changeNode = root.right.left;
    // 旋转节点的右孩子是变化节点
    root.right = changeNode;
    // 新根的左孩子是旋转节点
    newRoot.left = root;
    // 返回新节点
    return newRoot;
}

// 右旋
function rightRotate(root) {
    // 得到新根
    let newRoot = root.left;
    // 得到变化节点
    let changeNode = root.left.right;
    // 当前旋转节点的左孩子为变化节点
    root.left = changeNode;
    // 新根的右孩子是旋转节点
    newRoot.right = root;
    // 返回新节点
    return newRoot;
}

// 构建平衡二叉搜索树
function change(root) {
    if (isBalance(root)) { // 判断是不是平衡
        return root;
    }
    if (root.left != null) {
        root.left = change(root.left);
    }
    if (root.right != null) {
        root.right = change(root.right);
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        // 左子树深，需要右单旋
        let changeDeep = getDeep(root.left.right);
        let nochangeDeep = getDeep(root.left.left);
        if (changeDeep > nochangeDeep) {
            root.left = leftRotate(root.left);
        }
        let newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right);
        newRoot = change(newRoot);
        return newRoot;
    } else {
        // 右子树深，需要左单旋
        let changeDeep = getDeep(root.right.left);
        let nochangeDeep = getDeep(root.right.right);
        if (changeDeep > nochangeDeep) {
            root.right = rightRotate(root.right);
        }
        let newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left);
        newRoot = change(newRoot);
        return newRoot;
    }
}

// 添加节点
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

// 构建二叉树
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

// 判断二叉树是否存在某个节点
var num = 0;
function search(root, target) {
    if (root == null) {
        return false;
    }
    num += 1
    if (root.value == target) {
        return true;
    } else if (root.value > target) {
        return search(root.left, target);
    } else {
        return search(root.right, target);
    }
}

let arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}
let root = buildTree(arr);
let newRoot = change(root);
// console.log(search(root, 1000));
// console.log(num);
// num = 0;
// console.log(search(newRoot, 1000));
// console.log(num);

console.log(isBalance(newRoot));
// console.log(isBalance(newRoot));
