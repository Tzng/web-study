var a=[1,3,4];
function f() {
    for(var i=0;i<a.length;i++){
        var max=a[0];
        if(a[i]>max){
            max=a[i]
        }
    }
    return max;
}
console.log(f());