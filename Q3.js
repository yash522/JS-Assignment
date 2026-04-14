var N = parseInt(prompt("Enter N"));
var K = parseInt(prompt("Enter K"));

function isPalindrome(n) {
    var s = n.toString();
    var rev = s.split("").reverse().join("");
    return s == rev;
}

var found = -1;

for (var X = 0; X <= 100000; X++) {
    var val = N + X;

    if (val % K == 0 && isPalindrome(val)) {
        found = X;
        break;
    }
}

alert(found);
