const CommService = {
    /**
     * 地区列表
     */
    areaList: async (pcode?: string) => {
        const params = new FormData();
        if(pcode){
            params.append('pcode', pcode)
        }
        const res = await fetch('https://api.jyfwyun.com/cloud-service/cross/regionList', {
            method:'POST',
            body: new URLSearchParams(params).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const json = await  res.json();
        return json.result;
    },
    /**
     * 获取主题数据
     */
    themeList: async () => {
        const res = await fetch("https://api.jyfwyun.com/cloud-service/cross/themeList?entType=2&ac=120000");
        const result = await res.json();
        return result;
    },
    /**
     * 搜索
     */
    search: async (params: any) => {
        const res = await fetch("https://api.jyfwyun.com/cloud-service/cross/search", {
            method:'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await  res.json();
        return json.result;
    }
}

export default CommService;

const themeList2 = async () => {
    // 从A那拿到数据
    const res = await fetch("https://api.jyfwyun.com/cloud-service/cross/themeList");
    // 交给B处理
    const result = await res.json();
    // 交给C处理
    const result2 = await delay(result);
    // 交给D处理
    const result3 = await delay(result2);
}

// 延迟两秒返数据
const delay = (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}