function Ad(x, y) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] === y) {
            return x;
        } else {
            var r = x.length;
            x[r] = y;
            return x.sort();
        }
    }
}

const arr = [1, 3, 4, 5];
var a = 1;
var b = 2;
console.log(Ad(arr, a));
console.log(Ad(arr, b));