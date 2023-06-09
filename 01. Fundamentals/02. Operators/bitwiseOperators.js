/*
    1 = 00000001;
    2 = 00000010;
    res = 00000011; (1 | 2);
    res = 00000000; (1 & 2);
*/

let readPermission = 4;
let writePermission = 2;
let executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);