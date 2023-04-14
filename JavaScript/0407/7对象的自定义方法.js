/**
 * 方法一直接定义
 * @type {Object}
 */
var arr = new Object();
var sum=0;
arr.average=function(x){
    for(var i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum/(x.length);
}
var a = [1, 2, 3, 4, 5];
var avg = arr.average(a);
console.log(avg);
/**
 * 方法二初始化定义
 */
var sum2=0;
var arr2={
    average2:function (x) {
        for(var i=0;i<x.length;i++){
            sum2+=x[i];
        }
        return sum2/(x.length);
    }
}
var a2 = [1, 2, 3, 4, 5];
var avg2 = arr2.average2(a2);
console.log(avg2);
/**
 * 方法三构造函数式
 */
var sum3=0;
function Arr3(){
    this.average3=function (x) {
        for(var i=0;i<x.length;i++){
            sum3+=x[i];
        }
        return sum3/(x.length);
    }
}
var a3= [1, 2, 3, 4, 5];
var avg3 = new Arr3();
console.log(avg3.average3(a3));

/**
 * 方法四
 */
