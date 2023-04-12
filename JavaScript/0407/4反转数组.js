var a=['red', 'green', 'blue', 'pink', 'purple'];
var b=[];
var j=0;
function f() {
    for(var i=a.length-1;i>=0;i--){
        b[j]=a[i];
        j++
    }
    return b;
}
console.log(f())