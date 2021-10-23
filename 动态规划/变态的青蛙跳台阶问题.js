// 青蛙可以跳1、2、3、4、......、n阶台阶，问青蛙跳到n级台阶有多少种跳法

// f(n) = f(n- 1) + f(n-2) + f(n-3) + ... + f(1) + f(0)

function jump(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    let result = 0;
    for (let i = 1; i < n; i++) {
        result += jump(n - i);
    }
    return result + 1;
}
console.log(jump(3));