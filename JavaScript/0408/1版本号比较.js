// 传入两个版本号，打印出最大的那个版本号
// 例如：传入 1.0.0 和 1.0.1，打印出 1.0.1
// 例如：传入 1.0.0 和 1.0.0，打印出 1.0.0

function compareVersion(va, vb) {
    // 这里写代码
    let arr1=va.split('.');
    let arr2=vb.split('.');
    let len=Math.max(arr1.length,arr2.length);
    for (let i=0;i<len;i++){
        let a=parseInt(arr1[i])||0;
        let b=parseInt(arr2[i])||0;
        if (a>b){
            return va;
        }else if(a<b){
            return vb;
        }

    }
    return '相等'
}

const v1 = '1.0.0'
const v2 = '1.0.1'
const v3 = '1.0.0'
console.log(compareVersion(v1, v2))
console.log(compareVersion(v1, v3))
