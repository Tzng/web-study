function f(param) {
    // 将这个字符串转成对象返回出来
    return JSON.parse(param);
}
const s = f('{"a": "Hello", "b": "World"}')
console.log(s)