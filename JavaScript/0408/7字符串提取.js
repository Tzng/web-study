//substring()

function F1(x) {
    return x.substring(x.lastIndexOf('.'));
}
//split()
function F2(x2) {
    return x2.split(".").pop();
}
//正则表达式
function F3(x3) {
    return x3.match(/\.([^.]+)$/)[1];
}
const a="http://localhost:4000/chapter1/string.html";
const b="http://localhost:4000/chapter1/string.text";
console.log(F1(a));
console.log(F2(a));
console.log(F3(a));
console.log(F1(b));
console.log(F2(b));
console.log(F3(b));
