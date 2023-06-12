/**
 * Expression;
 * while(condition){ statement }
 * Execute until the condition is false.
 * NOTE: If condition is true but you didn't change the condition in loop,
 * this loop will execute infinity.
 */

let i = 0;
while(i <= 5){
    console.log(i);
    i++;
}