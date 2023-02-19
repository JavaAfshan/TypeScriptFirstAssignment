/**42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
//Program number 41
let MagiciansNames:string[]=["Muhammad Ijaz Mughal","Muhammad Yaseen","Mian Afzal Rashid","Shamsheer Razaq"];
function showMagicians(MagiciansNames:string[])
{
for(var i=0;i<MagiciansNames.length;i++)
{
    console.log((i+1)+": "+MagiciansNames[i]);
}
}
function makeGreat(MagiciansNames:string[])
{
    for(var i=0;i<MagiciansNames.length;i++)
    {
        var name=MagiciansNames[i];
        MagiciansNames[i]="The Great "+MagiciansNames[i];
    }
}
console.log("The names of Magicians before: ");
showMagicians(MagiciansNames);
makeGreat(MagiciansNames);
console.log("The names of Magicians after: ");
showMagicians(MagiciansNames);
