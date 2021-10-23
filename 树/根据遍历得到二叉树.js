let qian = ["a", "c", "f", "g", "b", "d", "e"];
let zhong = ["f", "c", "g", "a", "d", "b", "e"];
let hou = ["f", "g", "c", "d", "e", "b", "a"];
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * 根据前序遍历、中序遍历还原二叉树
 * @param {*} qian 前序遍历
 * @param {*} zhong 中序遍历
 * @returns 
 */
function fn1(qian, zhong) {
    // 处理异常情况
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length !== zhong.length) {
        return null;
    }
    let root = new Node(qian[0]); // 根据前序遍历得到根节点
    let index = zhong.indexOf(root.value); // 根据中序遍历得到根节点的位置索引
    let qianLeft = qian.slice(1, index + 1); // 得到前序遍历左子树
    let qianRight = qian.slice(index + 1); // 得到前序遍历右子树
    let zhongLeft = zhong.slice(0, index); // 得到中序遍历左子树
    let zhongRight = zhong.slice(index + 1); // 得到中序遍历右子树
    root.left = fn(qianLeft, zhongLeft); // 根据左子树的前序和中序还原左子树并赋值给root.left
    root.right = fn(qianRight, zhongRight); // 根据右子树的前序和中序还原右子树并赋值给root.right
    return root;
}

/**
 * 根据中序遍历、后序遍历还原二叉树
 * @param {*} zhong 中序遍历
 * @param {*} hou 后序遍历
 */
function fn2(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) {
        return null;
    }
    let root = new Node(hou[hou.length - 1]);
    let index = zhong.indexOf(root.value);
    let zhongLeft = zhong.slice(0, index);
    let zhongRight = zhong.slice(index + 1);
    let houLeft = hou.slice(0, index);
    let houRight = hou.slice(index, hou.length - 1);
    root.left = fn2(zhongLeft, houLeft);
    root.right = fn2(zhongRight, houRight);
    return root;
}
const root2 = fn2(zhong, hou);
console.log(root2);
