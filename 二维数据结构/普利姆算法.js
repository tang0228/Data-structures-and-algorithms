const max = 1000000;
const distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighbour = [];
}

let pointSet = [];

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function getIndex(str) {
    for (let i = 0; i < pointSet.length; i++) {
        if (str == pointSet[i].value) {
            return i;
        }
    }
    return -1;
}

function getMinNode(pointSet, distance, nowPonit) {
    let fromNode = null; // 起始点
    let toNode = null; // 终点
    let minDis = max; // 最短边
    // 根据当前已有的起点，判断以此与其它点连接的距离
    for (let i = 0; i < nowPonit.length; i++) {
        let nowPointIndex = getIndex(nowPonit[i].value); // 得到当前起点点的位置
        for (let j = 0; j < distance[nowPointIndex].length; j++) {
            let nowNode = pointSet[j]; 
            if (nowPonit.indexOf(nowNode) < 0 && distance[nowPointIndex][j] < minDis) {
                fromNode = nowPonit[i];
                toNode = nowNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }
    fromNode.neighbour.push(toNode);
    toNode.neighbour.push(fromNode);
    return toNode;
}

function prim(pointSet, distance, start) {
    let nowPonit = [];
    nowPonit.push(start);
    while (true) {
        let minNode = getMinNode(pointSet, distance, nowPonit);
        nowPonit.push(minNode);
        if (nowPonit.length == pointSet.length) {
            break;
        }
    }
}
prim(pointSet, distance, pointSet[2]);
console.log(pointSet);