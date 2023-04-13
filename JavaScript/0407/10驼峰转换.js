var a = 'user_id';
a = a.replace(/_([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
});
console.log(a);