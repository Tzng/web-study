var b = [
    {
       name: '张三',
       age: 11,
    },
    {
        name: '李四',
        age: 12
    },
    {
        name: '王五',
        age: 13
    }
   ]
function f() {
    for(var i =0;i<b.length;i++){
        //打印出年龄大于12岁的人的名字
        const peaple=b[i]
        if(peaple.age>12){
            console.log(peaple.name)
        }

    }
}
f();