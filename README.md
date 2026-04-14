Question 1: Digit Gatekeeper

Approach:
Loop through all numbers from L to R. For each number, first check if it is divisible by K. Then extract its digits one by one to check two things:

it should not contain digit 0
sum of digits should be prime

A helper function is used to check if a number is prime.

Complexity = O(N)

Question 2: Roll-Seed Lock

Approach:
Start with number N and repeat the given operation 3 times.

If even → divide by 2 and add seed
If odd → multiply by 3 and subtract seed

After 3 steps, check if the result is a 3-digit number and its middle digit is equal to seed.

Complexity = O(1) 

Question 3: Mirror Corridor

Approach:
Try all values of X from 0 to 100000. For each X:

Compute N + X
Check if it is divisible by K
Check if it is a palindrome

Stop when the first valid X is found.

Complexity = O(100000 × d)
(d = number of digits for palindrome check)

Question 4: Fare Calculator

Approach:
Follow the steps in order:

Calculate initial fare
Add extra charges based on conditions
Adjust using seed value
Finally round up to nearest multiple of 5

Each condition is applied one by one.

Complexity = O(1)

Question 5: Skipping Numbers

Approach:
Keep adding numbers starting from 1. Skip numbers divisible by (seed + 2).
Continue until the sum becomes at least N.
Track both m and sum.

Complexity = O(m) m is final number reached


Question 6: Contest Score Judge

Approach:
Calculate score using formula:
score = 3a + b − 2c

Then apply conditions:

if score < 0 → make it 0
if total submissions > 50 → subtract 10
finally check PASS or FAIL

Complexity = O(1)
