const num2 = {
    a: '123',
    b: '222',
    c: '',
    d: null,
    e: undefined
};

/**
 *  Object.entries() 方法来将对象转换为数组
 *  Array.prototype.reduce() 方法来过滤掉没有值的字段
 *  Object.fromEntries() 方法将数组转换回对象。
 * @param num2
 * @returns {{[p: string]: any}}
 */
function removeEmpty(num2){
    return Object.fromEntries(
        Object.entries(num2).reduce((num3,[key,value])=>{
            if (value !==null &&value !==undefined&&value!==""){
                num3.push([key,value]);
            }
            return num3
        },[]));
}
console.log(removeEmpty(num2));

function removeEmpty2() {
    for(const[key,value] of Object.entries(num2)){
        if(value===null||value===undefined||value===''){
            delete num2[key];
        }
    }
    return num2;
}
console.log(removeEmpty2(num2));