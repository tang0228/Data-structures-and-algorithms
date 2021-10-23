function feibo(n) {
    if (n <= 0) {
        return -1;
    }
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return feibo(n - 1) + feibo(n - 2);
}
console.log(feibo(7));