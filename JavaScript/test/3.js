const a ={
    name:'张三',
    age:11,
    birthYear:1996
}
//打印一下值为数字的属性名
function f() {
    const keys=Object.keys(a)
    for(let i=0;i<keys.length;i++){
        const key=keys[i]
        const value = a[key]
        if(typeof value==="number"){
            console.log(key)
        }
    }

}
f()