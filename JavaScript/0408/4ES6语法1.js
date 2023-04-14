/**
 * 在ES6中，Object.is()与原来的比较操作符“===”、“==”不同：
 * 对待 有符号的零和NaN不同
 * “===”/“==”：    将数字-0和+0视为相等；    将Number.NaN与NaN视为不等
 * Object.is()：不会将数字-0和+0视为相等；也不会将Number.NaN与NaN视为不等；如果两个值都是NaN则视为相等
 */
console.log(-0 === +0);//true
console.log(Object.is(-0,+0));//false
console.log(NaN === Number.NaN);//false
console.log(Object.is(NaN,Number.NaN));//true