/**Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
//Program number 15
var dinnerGuests = ["Mahpara", "Afshan", "Ayesha", "Asma", "Aiman"];
console.log("The name of the guests who can't make it \n1. "+dinnerGuests[3]+"\n2. "+dinnerGuests[2]);
dinnerGuests.splice(2,1,"Aruba");
dinnerGuests.splice(3,1,"Sara");
for(var i=0;i<dinnerGuests.length;i++)
{
    console.log(": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
}
