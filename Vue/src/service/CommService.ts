const CommService = {
    /**
     * 地区列表
     */
    areaList: async () => {
        const res = await fetch('https://api.jyfwyun.com/cloud-service/cross/regionList', {
            method:'POST',
        });
        const json = await  res.json();
        return json.result;
    },
}

export default CommService;
