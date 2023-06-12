/**
 * i. break keyword will jump out of the loop.
 * ii. continue keyword will jump to the next iteration of the loop.
 */

let i = 0;
while(i <= 10){
    if(i === 5){
        break;
    }

    console.log('break', i);
    i++;
}

let j = 0;
while(j <= 10){
    if(j % 2 === 0){
        j++;
        continue;
    }

    console.log('continue', j);
    j++;
}