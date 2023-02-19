/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
//Program 24

//Test 1
let firstName:string='Afshan';
console.log(firstName=='Afshan'?'My first name is Afshan':'My first name is not Afshan');
console.log(firstName=='Afshan')
console.log(firstName='Yasmeen'?'My first name is Yasmeen':'My first name is not Yasmeen');
console.log(firstName=='Yasmeen');

//Test 2
let provinceName='punjab';
console.log("My province name is "+provinceName);
console.log(provinceName==provinceName.toLowerCase()?'My province name is in lower Case':'My province name is in upper Case');
console.log(provinceName=='Punjab'.toLowerCase());
provinceName='Punjab';
console.log("My province name is "+provinceName);
console.log(provinceName==provinceName.toLowerCase()?'My province name is in lower Case':'My province name is in title Case');
console.log(provinceName=='Punjab'.toLowerCase());

//Test 3
let num1:number =2;
let num2:number =3;
console.log("The 3 and 3 are equal "+(num1==num1));
console.log("The 2 and 3 are equal "+(num1==num2));
console.log("The 2 and 3 are not equal "+(num1!=num2));
console.log("The 2 and 2 are not equal "+(num1!=num1));
console.log("The 3 is greater than 2 "+(num2>num1));
console.log("The 2 is greater than 3 "+(num1>num2));
console.log("The 2 is less than 3 "+(num1<num2));
console.log("The 3 is less than 2 "+(num2<num1));
console.log("The 2 is less than or equal to 3 "+(num1<=num2));
console.log("The 3 is less than or equal to 2 "+(num2<=num1));
console.log("The 3 is greater than or equal to 2 "+(num2>=num1));
console.log("The 2 is greater than or equal to 3 "+(num1>=num2));

//Test 4
let num3:number =4;
console.log("The 2 is less than 3 and 2 is also less than 4 "+((num1<num2)&&(num1<num3)));
console.log("The 3 is less 2 and 3 is also than 4 "+((num2<num1)&&(num2<num3)));
console.log("The 3 is less than 2 or 3 is less than 4 "+((num2<num1)||(num2<num3)));
console.log("The 4 is less than 2 or 4 is less than 3 "+((num3<num1)||(num3<num2)));

//Test 6
let numArray:number[]=[1,2,3,4,5];
console.log("The number array is "+numArray);
console.log("The 7 is in array of number ");

//Test 5

console.log(numArray.indexOf(7)==-1?'false':'true');
console.log("The 2 is in array of number ");
console.log(numArray.indexOf(2)==-1?'false':'true');
