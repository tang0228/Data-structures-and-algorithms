// 一个青蛙可以跳一级、二级台阶，问跳n级台阶有多少种跳法

// 最后一跳的前一次位置  n-1， n-2
// 演变为到n-1阶的跳法 + n-2阶的跳法

// n-1阶的前一次位置 n-2, n-3
// 演变为到n-2阶的跳法 + n-3阶的跳法

function jump(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2
    }
    return jump(n - 1) + jump(n - 2);
}
console.log(jump(3));