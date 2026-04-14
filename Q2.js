var N = parseInt(prompt("Enter N"));
var seed = parseInt(prompt("Enter seed"));

var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 == 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

var finalNum = current;
var str = finalNum.toString();

if (finalNum >= 100 && finalNum <= 999 && str.length == 3 && parseInt(str[1]) == seed) {
    alert("YES " + finalNum);
} else {
    alert("NO " + finalNum);
}
