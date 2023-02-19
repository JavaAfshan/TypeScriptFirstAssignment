/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
//Program number 25
//successful scenario
let Alien_Color:string="green";
if(Alien_Color=="green")
{
    console.log("You just earned five points");
}
//failed scenario
Alien_Color="red";
if(Alien_Color=="green")
{
    console.log("You just earned five points");
}
