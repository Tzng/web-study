function f(x) {
    return x.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?f(cur):cur);
    },[]);
}
const a = [[1,3,4,5],[2,3,4,5,6,[2,4,5,6]]];
console.log(f(a));