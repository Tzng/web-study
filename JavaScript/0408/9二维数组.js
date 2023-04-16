const a = [[1,3,4],[[2,8]]];
const b =[1,3,4,5, [3,4,9]];
function Max(x) {
    let max=x[0][0];
    for(var i= 0; i<x.length;i++){
        for(var j = 0;j<x[i].length;j++){
            if (x[i][j]>max){
                max=x[i][j];
            }
        }
    }
    return max;
}
console.log(Max(a));
console.log(Max(b));