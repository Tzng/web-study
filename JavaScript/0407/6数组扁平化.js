/**
 * reduce() 方法是 JavaScript 数组的一个内置方法，它接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 * concat() 方法用于连接两个或多个数组。concat() 方法不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值。
 *
 * prev.concat() 是将前面的结果与当前元素连接起来，
 * 而 reduce() 方法是将前面的结果与当前元素计算后返回一个值。
 * @param x
 * @returns {*}
 */
function f(x) {
    return x.reduce((prev,cur)=>{       // reduce() 方法用于迭代输入数组的每个元素并将其与输出数组连接起来。
        return prev.concat(Array.isArray(cur)?f(cur):cur);          //prev.concat() 是将前面的结果与当前元素连接起来
    },[]);                     //[] 是 reduce() 方法的初始值
}
const a = [[1,3,4,5],[2,3,4,5,6,[2,4,5,6]]];
console.log(f(a));