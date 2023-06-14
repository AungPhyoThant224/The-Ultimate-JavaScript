/**
 * If the value does not pass for rate and year they will use their default
 * value as rate=3.5 and year=5.
 * NOTE: Once you give a parameter as default value, you should also give all
 * the other parameters after that a default value.
 */
function interest(principle, rate = 3.5, year = 5) {
    return principle * (rate / 100) * year;
}

console.log(interest(10000));