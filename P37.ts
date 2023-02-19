/** 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function makeShirt(size:String="Large",message:String="I love transcript"):String
{
    let summary:string="The size of the shirt is: "+size+" and the message to be printed is '"+message+"'";
    return summary;
}
console.log(makeShirt()+"\n"+makeShirt("medium")+"\n"+makeShirt("medium","I love javascript")+"\n"+makeShirt("small","I love python")+"\n"+makeShirt("small"));
