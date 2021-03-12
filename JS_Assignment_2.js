
/*
1. Write a JS program to capitalize the first letter of each word of a given string.
join
substr
split
upperCase
*/
/*
function sentence() {
    var i;
    i.split(' ');

    for (i = 0, x < i.length; i++)
    {
        i[0].upperCase + i.substr(1);
    }
}
console.log("hello there")
*/
/*
var a = "hello,there,code,learners,hub";
a = a.split(" ");

var b = a.join();

console.log(b);
*/

function capitalizeWords(words) {

    words = words.split(" ");

    for (let a = 0; a < words.length; a++) {
        words[a] = words[a][0].toUpperCase() + words[a].substr(1);
    }
    return words.join(" ");

}

console.log(capitalizeWords("hello,world,there,are,there"));






/*
var capital = sentence.charAt(0).toUpperCase();



console.log(capital + sentence.slice(1));
/////////////////////////
function capitalize(str) {
    str = str.split(" ")

    let
}
*/






/*
2. write a function to check the value of two numbers. if the two numbers are equal, multiply the sum of the two numbers by 3 else return the sum of the two numbers.
*/

/*
var a = 4;
var b = 12;


function checkNums(x, y) {

    sum = x + y;
    return sum;
}


if (a == b) {

    var multiply = a * b;
    console.log(multiply);

}
else {
    console.log(checkNums(a, b));
}
*/



function checkNums(x, y) {

    if (x == y) {

        return (x + y) * 3;
    }
    else {

        return x + y;

    }

}
console.log(checkNums(4, 4));




var day;
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");

}




var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)


