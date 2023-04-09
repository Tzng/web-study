var a = [1, 2, 3, 4, 5];
var b = [2, 3, 6, 7, 8];
var c = [];
var z =0;
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            c[z] = a[i];
            z++;
        }
    }
}
console.log(c);
