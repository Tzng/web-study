var a=[1,3,4];
var b=[1,4,3];
var c=[1,2,3];
function f(arr1,arr2) {
    if(arr1.length !==arr2.length){
        return false;
    }
    const sorteArr1 = arr1.sort();
    const sorteArr2 = arr2.sort();
    for(let i=0;i<sorteArr1.length;i++){
        if(sorteArr1[i]!==sorteArr2[i]){
            return false;
        }
    }
    return true;
}
console.log(f(a,b));
console.log(f(a,c));