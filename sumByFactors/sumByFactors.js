/*
Implement a function that takes in an array of numbers and returns a sorted array of 
tuple(s) that contains a prime number and the sum of the numbers inside the array that 
contains that prime number.

Example:
sumByFactors([12, 15]) //=> returns [[2, 12], [3, 27], [5, 15]]
The prime factors of 12 are 2 and 3. The prime factors are 15 is 3 and 5.
The first tuple will contain 2, which is a prime factor of 12 but not 15, and the sum of 12.
The second tuple will contain 3, which is a prime factor of 12 and 15, and the sum of 27.
The third tuple will contain 5, which is a prime factor of 15 but not 12, and the sum of 15. 

sumByFactors([15, 30, -45]) //=> return [[2, 30], [3, 0], [5, 0]]
The prime factors of 15 are 3 and 5. The prime factors of 30 are 2, 3 and 5. The prime factor of -45 are 3 and 5.
The first tuple will contain 2, which is a prime factor of 30 but not 15 and -45, and the sum of 30.
The second tuple will contain 3, which is a prime factor of 15, 30 and -45, and the sum of 0.
The third tuple will contain 5, which is a prime factor of 15, 30 and -45, and the sum of 0. 
*/

var sumByFactors = function (/*argument(s)*/) {
};