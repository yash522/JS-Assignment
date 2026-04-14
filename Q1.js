var L = parseInt(prompt("Enter L"));
var R = parseInt(prompt("Enter R"));
var K = parseInt(prompt("Enter K"));

function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

var count = 0;

for (var x = L; x <= R; x++) {
    if (x % K == 0) {
        var num = x;
        var sum = 0;
        var zero = false;

        while (num > 0) {
            var digit = num % 10;
            if (digit == 0) {
                zero = true;
                break;
            }
            sum += digit;
            num = Math.floor(num / 10);
        }

        if (!zero && isPrime(sum)) {
            count++;
        }
    }
}
