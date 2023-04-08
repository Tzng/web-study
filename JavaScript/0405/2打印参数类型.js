var a = "iamstring.";
var b = 222;
var c= [1,2,3];
var d = new Date();
var e = function(){alert(111);};
var f = function(){this.name="22";};

//typeof
console.log(typeof a);
console.log(typeof a=="string");//console.log(typeof a==String);是错误的

//instance判断已知对象类型的方法,大小写不能错
//console.log(f instanceof Funtion);//console.log(f instanceof function);是错误的

//constructor 在类继承时会出错，需要让对象的contructor手动指向自己=》
console.log(c.constructor === Array);

//prototype
console.log(Object.prototype.toString.call(d)==='[object Date]');

function f1(params) {
    console.log(typeof params);
}

f1(1);
f1([1]);
f1(null);