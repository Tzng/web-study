const a = [[1,3,4],[[2,8]]];
const b =[1,3,4,5, [3,4,9]];
function N1(x) {
    return x.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?N1(cur):cur);
    },[]);
}
function Max(x) {
    let max=x[0];
    for(let i= 0; i<x.length; i++){
            if (x[i]>max){
                max=x[i];
            }
        }
    return max;
}
console.log(Max(N1(a)));//8

console.log(Max(N1(b)));//9


//AI
function AImax(x) {
    const max = x.reduce((c,d) => Math.max(c,Array.isArray(d)?Math.max(...d):d),-Infinity);
    return max
}
console.log(AImax(a));//NaN
console.log(AImax(b));//9


//AI优化版
function AImaxPro(x) {
    const max = x.reduce((c,d) => {
        if (Array.isArray(d)) {
            return Math.max(c, Math.max(...d));
        } else if (typeof d === 'number') {
            return Math.max(c, d);
        } else {
            return c;
        }
    }, -Infinity);
    return max;
}
console.log(AImaxPro(a));//NaN
console.log(AImaxPro(b));//9


function AImaxPro2(x) {
    const max = x.reduce((c,d) => {
        if (Array.isArray(d)) {
            return Math.max(c, Math.max(...d));
        } else if (typeof d === 'number' && !Number.isNaN(d)) {
            return Math.max(c, d);
        } else {
            return c;
        }
    }, -Infinity);
    return max;
}
console.log(AImaxPro2(a));//NaN