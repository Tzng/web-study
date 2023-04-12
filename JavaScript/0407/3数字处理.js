var a =12354312;
function f(x) {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
console.log(f(a));