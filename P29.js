/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
var favourite_fruit = ["Strawberry", "PineApple", "Mango"];
if (favourite_fruit.indexOf("Mango") != -1) {
    console.log("You really like Mango!");
}
if (favourite_fruit.indexOf("Banana") != -1) {
    console.log("You really like Banana");
}
if (favourite_fruit.indexOf("Strawberry") != -1) {
    console.log("You really like Strawberry");
}
if (favourite_fruit.indexOf("PineApple") != -1) {
    console.log("You really like PineApple");
}
if (favourite_fruit.indexOf("Apple") != -1) {
    console.log("You really like Apple");
}
