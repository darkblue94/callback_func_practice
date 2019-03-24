var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isOlder(el) {
    return el >= 80;
}
function isYounger(el) {
    return el <= 50;
}
function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {

        return Math.round(206.9 - (0.67 * el));

    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var olderPeople = arrayCalc(ages, isOlder);
console.log(olderPeople);
var youngerPeople = arrayCalc(ages, isYounger);
console.log(youngerPeople);
var mHR = arrayCalc(ages, maxHeartRate);
console.log(mHR);