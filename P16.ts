/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
//Program number 16
var dinnerGuests = ["Mahpara", "Afshan", "Ayesha", "Asma", "Aiman"];
console.log("People that I found a bigger dinner table:\n1: Sabrena\n2: Tahniyat\n3: Zainab");
dinnerGuests.unshift("Sabrena");
dinnerGuests.splice(dinnerGuests.length/2,0,"Tahniyat");
dinnerGuests.push("Zainab");
for(var i=0;i<dinnerGuests.length;i++)
{
    console.log((i+1)+": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
}
