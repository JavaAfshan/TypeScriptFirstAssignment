//Program number 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person:string ="Eric";
console.log("The person name in Upper Case is "+person.toUpperCase());
console.log("The person name in lower case is "+person.toLowerCase());
function toTitleCase(str:string):string
{
    return str.substring(0,1).toUpperCase()+str.substring(1).toLowerCase();
}
console.log("The person name in title case is "+toTitleCase(person));
