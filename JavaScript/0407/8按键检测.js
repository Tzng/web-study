/**
 * 监听单个键盘事件
 */
//keypress只能捕捉单个字符
// keypress 可以捕获单个字符的大小写
// keypress 不区分小键盘和主键盘的数字字符
// keypress 不能监听alt、ctrl、enter、shift这些
// keydown keyup 可以捕获组合键
// keydown keyup 不能区分字母的大小写
// keydown keyup 区分小键盘和主键盘数字字符
document.addEventListener('keypress',(e)=>{
    console.log(e);
})

/**
 * 监听两键组合事件
 */
document.addEventListener('keydown',(e)=>{
    if(e.ctrlKey&&e.code === '67'){
        console.log('Ctrl+c')
    }
})

/**
 * 普通两键或三键
 */
let firstTime=0;
let doubleEvent={}
document.addEventListener('keyup',(e)=>{
    let currentTime = Date.now()
    if(firstTime===0){
        firstTime=currentTime
        doubleEvent[e.key]=true;
    }else if(currentTime-firstTime>300){
        firstTime=0
        doubleEvent={}
    }else {
        doubleEvent[e.key]=true
    }
    if(doubleEvent.b&&doubleEvent.c){
        console.log('b+c');
        doubleEvent={}
        firstTime=0
    }
})


/**
 * AI
 */
document.addEventListener('keydown',(event)=>{
    console.log(`${event.key}`)
})
//同时按下三个按钮
let keys = new Set();
document.addEventListener('keydown',(event)=>{
    keys.add(event.key);
    if(key.size===3){
        console.log(`用户同时按下了${Arry.from(keys).join('+')}按钮`);
    }
});
document.addEventListener('keyup',(event)=>{
    keys.delete(event.key)
});