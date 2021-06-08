/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/
function tribonacci(signature, n) {
  if (!Array.isArray(signature)) {
    throw new Error(
      `InvalidArgumentException: Parameter 1 must be an array, received ${typeof signature}`
    );
  } else if (!signature.length) {
    throw new Error("Parameter 1 cannot be empty.");
  } else if (signature.length < 3) {
    throw new Error(`InvalidArgumentException: Paramter 1 must be an array of length 3, received
          ${signature.length}`);
  } else if (!Number.isInteger(n)) {
    throw new Error(`InvalidArgumentException: Paramter 2 must be an integer, received
      ${n}`);
  } else if (n < 0) {
    throw new Error(`InvalidArgumentException: Parameter 2 must be a non-negative integer, received
      ${n}`);
  }

  const tribo = [...signature];
  for (let i = 3; i < n; i++) {
    tribo[i] = tribo[i - 1] + tribo[i - 2] + tribo[i - 3];
  }
  return n < 3 ? tribo.slice(0, n) : tribo;
}

console.log(tribonacci([0, 0, 1], 8)); // [0, 0, 1,  1, 2, 4, 7, 13]
]
console.log(tribonacci([0, 1, 1], 8)); // [0, 1,  1,  2, 4, 7, 13, 24]
