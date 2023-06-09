/**
 * Max of Two Numbers.
 */
console.log(maxNum(1, 2));
function maxNum(firstNum, secondNum) {
  return firstNum > secondNum ? firstNum : secondNum;
}

/**
 * Landscape or Portriate
 */
console.log(isLandscape(600, 300));
function isLandscape(width, height) {
  return width > height;
}

/**
 * FizzBuzz
 *
 * Divisible by 3 => Fizz,
 * Divisible by 5 => Buzz,
 * Divisible by both 3 & 5 => FizzBuzz,
 * Not Divisble by both => input,
 * Not a number => 'Not a number'
 */
console.log(fizzBuzz("7"));
function fizzBuzz(input) {
  if (typeof input != "number") {
    return NaN;
  }

  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return input;
  }
}

/**
 * Demerit Point
 *
 * Speed Limit => 70
 * 5 -> 1 point
 * Math.floor()
 * 12 points -> suspended
 */
console.log(checkSpeed(80));
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return "OK";
  }

  let point = Math.floor((speed - speedLimit) / 5);
  if (point >= 12) {
    return "License Suspended";
  } else if (point == 1) {
    return point + " point";
  }

  return point + " points";
}

/**
 * Even and Odd Numbers
 */
showNumbers(10);
function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}

/**
 * Count Truthy
 *
 * undefined
 * null
 * ''
 * false
 * 0
 * Nan
 */
countTruthy([false, 0, 1, NaN, 2, "", 3, undefined, null]);
function countTruthy(array) {
  let count = 0;
  for (let item of array) {
    if (item) {
      count++;
    }
  }
  console.log(count);
}

/**
 * String Properties
 */
let movie = {
  title: "a",
  rating: 5,
  releaseYear: 2018,
  director: "b",
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "string") {
      console.log(key, obj[key]);
    }
  }
}

/**
 * Sum of multiple of 3 and 5
 */

sum(5);
function sum(limit) {
  let resSum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      resSum += i;
    }
  }

  console.log(resSum);
}

/**
 * Grade
 */
let array = [80, 80, 50];
console.log(calculateGrade(array));

function calculateGrade(marks) {
  let average = calculateAverage(marks);
  if (average < 60) return "E";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

/**
 * Stars
 */
showStars(3);
function showStars(rows) {
  let star = "";
  for (let i = 1; i <= rows; i++) {
    star += "*";
    console.log(star);
  }
}

/**
 * Prime Numbers
 */
showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}
