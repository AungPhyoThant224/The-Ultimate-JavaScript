/**
 * Max of Two Numbers.
 */
// console.log(maxNum(1, 2));
// function maxNum(firstNum, secondNum){
//     return (firstNum > secondNum) ? firstNum : secondNum;
// }

/**
 * Landscape or Portriate
 */
// console.log(isLandscape(600, 300));
// function isLandscape(width, height) {
//     return (width > height);
// }

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
    if(typeof(input) != 'number'){
        return NaN;
    }

    if(input % 3 === 0 && input % 5 === 0){
        return 'FizzBuzz';
    }
    else if(input % 3 === 0){
        return 'Fizz';
    }
    else if(input % 5 === 0){
        return 'Buzz';
    }
    else{
        return input;
    }
}