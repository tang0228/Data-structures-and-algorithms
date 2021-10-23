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

function canLink(linked, tempBegin, tempEnd) {
    let begin = null;
    let end = null;
    for (let i = 0; i < linked.length; i++) {
        if (linked[i].indexOf(tempBegin) > -1) {
            begin = linked[i];
        }
        if (linked[i].indexOf(tempEnd) > -1) {
            end = linked[i];
        }
    }
    if (begin != null && end != null && begin == end) {// a和b是同一个村庄，不可以连接
        return false;
    }
    return true;
}

function link(linked, tempBegin, tempEnd) {
    let begin = null;
    let end = null;
    for (let i = 0; i < linked.length; i++) {
        if (linked[i].indexOf(tempBegin) > -1) {
            begin = linked[i];
        }
        if (linked[i].indexOf(tempEnd) > -1) {
            end = linked[i];
        }
    }
    if (begin == null && end == null) { // 两个点都是新的点，可以连接
        let newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        linked.push(newArr)
    } else if (begin == null && end != null) {// a点是新点，b是村庄，可以连接
        end.push(tempBegin);
    } else if (begin != null && end == null) {// a点是村庄，b是新点，可以连接
        begin.push(tempEnd);
    } else if (begin != null && end != null && begin != end) {// a和b都是村庄，但是相等，可以连接
        let con = begin.concat(end);
        let index = linked.indexOf(end);
        linked.splice(index, 1);
        index = linked.indexOf(begin);
        linked.splice(index, 1);
        linked.push(con);
    }
    tempBegin.neighbour.push(tempEnd);
    tempEnd.neighbour.push(tempBegin);
}

function kruskal(pointSet, distance) {
    let linked = [];
    while (true) {
        let minDis = max;
        let begin = null; // 起点
        let end = null; // 终点
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                // 不同村庄、最短边、可以连接
                if (i != j && distance[i][j] < minDis && canLink(linked, tempBegin, tempEnd)) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        // 连接
        link(linked, begin, end);
        if (linked.length == 1 && linked[0].length == pointSet.length) { // 只有一个部落，一个部落有五个村庄
            break;
        }
    }
}

kruskal(pointSet, distance);
console.log(pointSet);