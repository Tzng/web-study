function daysBetween(d1, d2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(d1);
    const secondDate = new Date(d2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));//round()用来四舍五入；abs()用来取绝对值
    return diffDays;
}
var da ="2023-4-2";
var db ="2023-3-2";
console.log(daysBetween(da, new Date()));
console.log(daysBetween(db, new Date()));
