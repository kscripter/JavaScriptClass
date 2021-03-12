/*
Read of on the following to solve the test:

 - Switch statement
 - JavaScript numbers and number methods
 - JavaScripts strings and string methods
 - More on loops (for/in, for/of)
 - Break and continue

1. (Conversion from kilograms) Write a program
that displays the result below side by side.
Kilograms   Pounds
1           2.21
3           6.62
...
47          103.64
50          110.25

Continue the flow if kilogram becomes 10 kilogram.

NB: 1 kilogram is 2.205 pounds. Also ensure result in pounds are fixed at 2 decimal places.

*/

//var kilogram = 1;
//var pounds = kilogram * 2.205;
console.log(`Kilograms   Pounds`);

for (kilogram = 1; kilogram <= 50; kilogram++) {
    pounds = kilogram * 2.205;

    if (kilogram == 10) {
        continue;
    }

    console.log(`${(kilogram)}           ${(pounds.toFixed(2))}`);
}


/*
2. Assign a variable to this string "The opposite of black is ". Slice the correct option from this string "Blue, White, Green", concatenate the sliced option to fill in the missing part of the first string.

GOODLUCK
*/

var sentence = "The opposite of black is";
var color = "Blue, White, Green";
var colorSlice = color.slice(6, 11);

console.log(`${sentence} ${colorSlice}`);


