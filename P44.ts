/**44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
//Program number 44
function orderSandwich(sandwich:string[])
{
    console.log("The sandwich must contains: ");
    for(var i=0;i<sandwich.length;i++)
    {
        console.log((i+1)+": "+sandwich[i]);
    }
}
let sandwich1:string[]=["Tomatoes","Cheese","Onion"];
let sandwich2:string[]=["Cheese","Onion","Peppers"];
let sandwich3:string[]=["Onion","Peppers","Pickles"];
let sandwich4:string[]=["Peppers","Pickles","Olives"];

orderSandwich(sandwich1);
orderSandwich(sandwich2);
orderSandwich(sandwich3);
orderSandwich(sandwich4);
