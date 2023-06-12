/**
 * Hour
 * if hour is between 6 and 12 : Good morning,
 * if hour is between 12 and 18 : Good Afternoon,
 * other wise : Good Evening,
 */

let hour = 10;
if(hour >= 6 && hour < 12){
    console.log("Good Moring");
}
else if(hour >= 12 && hour <18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}