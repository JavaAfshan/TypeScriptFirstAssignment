/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
// Program number 26
var alien_Color = "green";
// Execution of if only
if (alien_Color == "green") {
    console.log("You just earned five points");
}
else {
    console.log("You just earned ten points");
}
//Execution of else statement
alien_Color = "red";
if (alien_Color == "green") {
    console.log("You just earned five points");
}
else {
    console.log("You just earned ten points");
}
