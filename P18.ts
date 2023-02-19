/*18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */
let favouritePlaces:string[]=["Makkah","Madina","Islamabad","Lahore","Murree","Karachi"];
console.log("Original Array of Favourite Places "+favouritePlaces);

console.log("Printing the sorted Favourite place without actually modifying it");
let sortedArray:string[]=[];
for(var i=0;i<favouritePlaces.length;i++)
{
    sortedArray.push(favouritePlaces[i]);
}
console.log(sortedArray.sort());

console.log("Original array of favourite places "+favouritePlaces);

console.log("Printing the reversed Favourite place without actually modifying it");
let reversedArray:string[]=[];
for(var i=0;i<favouritePlaces.length;i++)
{
    reversedArray.push(favouritePlaces[i]);
}
console.log(reversedArray.reverse());

console.log("Original order of favourite places by reversing it back"+reversedArray.reverse());

console.log("Sorted Original array alphabetically "+favouritePlaces.sort());
console.log("Sorted Original array reverse alphabetical order "+favouritePlaces.reverse());

