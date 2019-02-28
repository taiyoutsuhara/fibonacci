'use strict';
// Fibonacci数列の関数
// 再帰すると指数オーダーになる。
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n == 1){
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// }
// Mapを使った省力化
const memo = new Map();
memo.set(0, 0); // n=0のとき
memo.set(1, 1); // n=1のとき
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
// iまで計算
const length = 40;
for (let i = 1; i <= length; i++){
    console.log(fib(i));
}