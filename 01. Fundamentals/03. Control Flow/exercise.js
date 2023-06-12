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
// console.log(fizzBuzz("7"));
// function fizzBuzz(input) {
//     if(typeof(input) != 'number'){
//         return NaN;
//     }

//     if(input % 3 === 0 && input % 5 === 0){
//         return 'FizzBuzz';
//     }
//     else if(input % 3 === 0){
//         return 'Fizz';
//     }
//     else if(input % 5 === 0){
//         return 'Buzz';
//     }
//     else{
//         return input;
//     }
// }

/**
 * Demerit Point
 * 
 * Speed Limit => 70
 * 5 -> 1 point
 * Math.floor()
 * 12 points -> suspended
 */
console.log(checkSpeed(80));
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint){
        return 'OK';
    }

    let point = Math.floor((speed - speedLimit) / 5);
    if(point >= 12){
        return 'License Suspended'
    }
    else if (point == 1){
        return point + ' point';
    }

    return point + ' points';

    
}