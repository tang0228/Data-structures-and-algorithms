function Node(value) {
    this.value = value;
    this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

/**
 * 对一个单选链表进行逆置
 * @param {*} node 
 */
function nizhi(node) {
    if (node.next.next == null) { // 这是倒数第二个节点
        node.next.next = node; // 让最后一个节点指向倒数第二个节点
        return node.next; // 返回最后一个节点
    } else {
        const result = nizhi(node.next); // 让下一个节点重复操作
        node.next.next = node; // 下一个节点指向自己
        node.next = null; // 自己指向null
        return result; // 返回结果
    }
}
const newNode = nizhi(node1);

function bianLink(node) {
    if (!node) {
        return;
    }
    console.log(node.value);
    bianLink(node.next);
}

bianLink(newNode);