/**
 * Loop with the true condition but newver change the condition to false
 * will make the infinite loop.
 * Beaware of infinite loop this will crash your brower and computer.
 */

let i = 1;
while(i <= 5){
    console.log(i);
    // i++;
}

while(true){

}

let j = 1;
do {
    // j++;
} while (j <= 5);

for(let k = 0; k <=5; ){}