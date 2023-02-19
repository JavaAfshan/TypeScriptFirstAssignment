/**43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
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
    let newMagiciansName:string[]=[];
    for(var i=0;i<MagiciansNames.length;i++)
    {
        var name=MagiciansNames[i];
        newMagiciansName[i]="The Great "+MagiciansNames[i];
    }
    return newMagiciansName;
}
let GreatMagiciansName=makeGreat(MagiciansNames);
console.log("The magician names before "+MagiciansNames);
makeGreat(MagiciansNames);
console.log("The magician names after "+MagiciansNames);
makeGreat(MagiciansNames);
console.log("The new Magician name array is "+GreatMagiciansName);
