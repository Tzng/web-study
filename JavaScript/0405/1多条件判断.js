
function f() {
    var nowDate = new Date();
    //var time=nowDate.getHours();
    if(nowDate.getHours()<10){
        console.log("Good mornin")
    }
    if (nowDate.getHours()>10&&nowDate.getHours()<20){
        console.log("Good day")
    }
    else {
        console.log("Good evening")
    }
}
f();