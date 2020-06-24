function palindrome(str) {

    var x = str.length;
    var a = Math.floor(x/2);

    for ( var i = 0; i < a; i++ ) {
        if (str[i] !== str[x - 1 - i]) {
            return false;
        }
    }
    return true;
}