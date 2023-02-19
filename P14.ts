/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
//Program number 14
let dinnerGuests:string[]=["Mahpara","Afshan","Ayesha","Asma","Aiman"];
for(var i=0;i<dinnerGuests.length;i++)
{
    console.log((i+1)+": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
}