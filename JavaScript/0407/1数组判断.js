var a=[1,3,4];
var b=[1,4,3];
var c=[1,2,3];
var d=[];
var z=0;
function f(x) {
    if(a.length===x.length){
        for(var i=0;i<a.length;i++){
            for(var j=0;j<x.length;j++){
                if(a[i]===x[j]){
                    d[z]=a[i];
                    z++;
                }
            }
        }
        return a.length === d.length;
    }else{
        return false;
    }
}
console.log(f(b));
console.log(f(c));

