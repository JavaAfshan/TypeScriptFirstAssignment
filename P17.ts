/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
// Program number 17
var dinnerGuests = ["Mahpara", "Afshan", "Ayesha", "Asma", "Aiman"];
console.log("I can invite only two people for dinner");
var j=dinnerGuests.length-1;
var popGuests=dinnerGuests.length-2;
for(var i=0;i<popGuests;i++)
{
    console.log("Dear "+dinnerGuests[j]+"! I'm sorry! I can't invite you to dinner");
    dinnerGuests.pop();
    j--;
}
for(var i=0;i<dinnerGuests.length;i++)
{
    console.log("Dear "+dinnerGuests[i]+"! You are still invited");
}
dinnerGuests.pop();
dinnerGuests.pop();
console.log("The empty guest list is : "+dinnerGuests);
