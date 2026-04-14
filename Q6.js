var a = parseInt(prompt("Enter a"));
var b = parseInt(prompt("Enter b"));
var c = parseInt(prompt("Enter c"));

var score = 3 * a + b - 2 * c;

if (score < 0) {
    score = 0;
}

if (a + b + c > 50) {
    score -= 10;
}

var status;
if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

alert(score + ", " + status);
