var a=['张3','李4','王5'];
function f() {
    for(var i = 0; i<a.length;i++){
        //打印出偶数结尾的人的名字
        const name=a[i]
        const endString=name.substring(name.length,1)
        if(endString%2===0){
            console.log(name)
        }
    }
}
f();
