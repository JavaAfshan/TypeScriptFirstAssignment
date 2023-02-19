/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
//Program number 33
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinalNumber = "";
for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == 1) {
        ordinalNumber = ordinalNumber + numberArray[i] + "st \n";
    }
    else if (numberArray[i] == 2) {
        ordinalNumber = ordinalNumber + numberArray[i] + "nd \n";
    }
    else if (numberArray[i] == 3) {
        ordinalNumber = ordinalNumber + numberArray[i] + "rd \n";
    }
    else {
        ordinalNumber = ordinalNumber + numberArray[i] + "th \n";
    }
}
console.log("The ordinal numbers is \n" + ordinalNumber);
