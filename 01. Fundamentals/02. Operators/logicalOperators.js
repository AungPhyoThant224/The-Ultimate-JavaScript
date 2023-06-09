/*
Logical AND (&&)
Return TRUE if both operands are TRUE
*/
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

/*
Logical OR (||)
Return TRUE if one of the operands is TRUE
*/
highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

/*
Not (!)
Return the OPPOSITE VALUE of variable
*/
console.log(!eligibleForLoan);