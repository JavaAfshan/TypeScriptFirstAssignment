//console.log('Hello World');
//let person:string ="Eric";
// console.log('Hello '+person+', would you like to learn some Python today?');
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let person:string ="Eric";
// console.log("The person name in Upper Case is "+person.toUpperCase());
// console.log("The person name in lower case is "+person.toLowerCase());
// function toTitleCase(str:string):string
// {
//     return str.substring(0,1).toUpperCase()+str.substring(1).toLowerCase();
// }
// console.log("The person name in title case is "+toTitleCase(person));
// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
// let famous_person:string='Alber Einstein';
// let message:string='A person who never made a mistake never tried anything new.';
// console.log(famous_person+' once said, "'+message+'"');
// let persons_Name:string="\t\n Afshan Yasmeen \t";
// console.log("The name before stripping is "+persons_Name);
// persons_Name=persons_Name.trim();
// console.log("The name after stripping is "+persons_Name);
//Number Eight: Write addition, subtraction, multiplication, and division
// operations that each result in the number 8. Be sure to enclose your 
//operations in print statements to see the results.
// let sum:number=4+4;
// let difference:number=16-8;
// let multiplication:number=4*2;
// let division:number=40/5;
// console.log("The sum of 4 and 4 is\t"+sum+"\nThe difference of 16 and 8 is\t"+difference);
// console.log("The multiplication of 4 and 2 is\t"+multiplication);
// console.log("The division of 40 and 5 is\t"+division);
//Program number 9
//Name: Afshan Yasmeen Date: 11/2/2023
//This program adds,substract,multiply and divide the number 
// console.log(5+3);
// console.log(16-8);
// console.log(4*2);
// console.log(40/5);
//Program number 10
//Name: Afshan Yasmeen Date: 11/2/2023
//This program prints the message that revealing my favourite number
// let favouriteNumber:number=16;
// let message:string="My favourite number is "+favouriteNumber;
// console.log(message);
//Program number 11
//let names:string[]=["Mahpara","Tayyaba","Mala","Aqsa","Ayesha","Asma"];
// for(var i=0;i<names.length;i++)
// {
// console.log("The "+(i+1)+" name of friend is "+names[i]);
// }
//Program number 12
// let names:string[]=["Mahpara","Tayyaba","Mala","Aqsa","Ayesha","Asma"];
// for(var i=0;i<names.length;i++)
// {
//     console.log("Hello "+names[i]+"! ,Would you like to learn python with me?");
// }
//Program number 13
// let favourite_Cars:string[]=["Audi","BMW","Mercedes","Porsche","Rolls Royce"];
// for(var i=0;i<favourite_Cars.length;i++)
// {
//     console.log((i+1)+": I want to own "+favourite_Cars[i]);
// }
//Program number 14
//let dinnerGuests:string[]=["Mahpara","Afshan","Ayesha","Asma","Aiman"];
// for(var i=0;i<dinnerGuests.length;i++)
// {
//     console.log((i+1)+": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
// }
//Program number 15
// console.log("The name of the guests who can't make it \n1. "+dinnerGuests[3]+"\n2. "+dinnerGuests[2]);
// dinnerGuests.splice(2,1,"Aruba");
// dinnerGuests.splice(3,1,"Sara");
// for(var i=0;i<dinnerGuests.length;i++)
// {
//     console.log((i+1)+": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
// }
//Program number 16
// console.log("People that I found a bigger dinner table:\n1: Sabrena\n2: Tahniyat\n3: Zainab");
// dinnerGuests.unshift("Sabrena");
// dinnerGuests.splice(dinnerGuests.length/2,0,"Tahniyat");
// dinnerGuests.push("Zainab");
// for(var i=0;i<dinnerGuests.length;i++)
// {
//     console.log((i+1)+": Dear "+dinnerGuests[i]+"! I would like to invite you to the dinner party held at our place.");
// }
//Program number 17
// console.log("I can invite only two people for dinner");
// var j=dinnerGuests.length-1;
// var popGuests=dinnerGuests.length-2;
// for(var i=0;i<popGuests;i++)
// {
//     console.log("Dear "+dinnerGuests[j]+"! I'm sorry! I can't invite you to dinner");
//     dinnerGuests.pop();
//     j--;
// }
// for(var i=0;i<dinnerGuests.length;i++)
// {
//     console.log("Dear "+dinnerGuests[i]+"! You are still invited");
// }
// dinnerGuests.pop();
// dinnerGuests.pop();
// console.log("The empty guest list is : "+dinnerGuests);
//Program number 18
// 
//console.log("The number of people you are inviting for the dinner is "+dinnerGuests.length);
// let countriesList:string[]=["Pakistan","China","England","America","Afghanistan","Canada"];
// console.log("The seventh country is "+countriesList[7]);
// console.log("The seventh country is "+countriesList["Seven"]);
//  class Country{
// Name:string;
// Capital:string;
// IndependenceDay:number;
// }
// let country1:Country={
//     Name:"Pakistan",
//     Capital:"Islamabad",
//     IndependenceDay:1947
// }
// console.log(country1);
// let country2:Country=
// {
//     Name:"China",
//     Capital:"Beijing",
//     IndependenceDay:1949
// }
// console.log(country2);
//Program 23
//let Country:string[]=["Pakistan","China","Afghanistan","England","America"];
//First Test
// console.log(Country[0]=='Pakistan'? 'I am pakistani':'I am not Pakistani');
// console.log(Country[0]=='Pakistan');
//Second Test
// console.log(Country[0]=='America'?'I am American':'I am not American');
// console.log(Country[0]=='America');
//Third Test
// console.log(Country[1]=='China'?'You are Chinese':'You are not Chinese');
// console.log(Country[1]=='China');
//Fourth Test
// console.log(Country[1]=='England'?'You are English':'You are not English');
// console.log(Country[1]=='England');
//Fifth Test 
// console.log(Country[2]=='Afghanistan'?'They are Afghani':'They are not Afghani');
// console.log(Country[2]=='Afghani');
//Sixth Test
// console.log(Country[2]=='China'?'You are Chinese':'You are not Chinese');
// console.log(Country[2]=='China');
//Seventh Test
// console.log(Country[3]=='England'?'You are English':'You are not English');
// console.log(Country[3]=='England');
//Eighth Test
// console.log(Country[3]=='America'?'You are American':'You are not American');
// console.log(Country[3]=='America');
//Ninth Test
// console.log(Country[4]=='America'?'You are American':'You are not American');
// console.log(Country[4]=='America');
//Tenth Test
// console.log(Country[4]=='England'?'You are English':'You are not English');
// console.log(Country[4]=='England');
//Program 24
//Test 1
// let firstName:string='Afshan';
// console.log(firstName=='Afshan'?'My first name is Afshan':'My first name is not Afshan');
// console.log(firstName=='Afshan')
// console.log(firstName='Yasmeen'?'My first name is Yasmeen':'My first name is not Yasmeen');
// console.log(firstName=='Yasmeen');
//Test 2
// let provinceName='punjab';
// console.log("My province name is "+provinceName);
// console.log(provinceName==provinceName.toLowerCase()?'My province name is in lower Case':'My province name is in upper Case');
// console.log(provinceName=='Punjab'.toLowerCase());
// provinceName='Punjab';
// console.log("My province name is "+provinceName);
// console.log(provinceName==provinceName.toLowerCase()?'My province name is in lower Case':'My province name is in title Case');
// console.log(provinceName=='Punjab'.toLowerCase());
//Test 3
// let num1:number =2;
// let num2:number =3;
// console.log("The 3 and 3 are equal "+(num1==num1));
// console.log("The 2 and 3 are equal "+(num1==num2));
// console.log("The 2 and 3 are not equal "+(num1!=num2));
// console.log("The 2 and 2 are not equal "+(num1!=num1));
// console.log("The 3 is greater than 2 "+(num2>num1));
// console.log("The 2 is greater than 3 "+(num1>num2));
// console.log("The 2 is less than 3 "+(num1<num2));
// console.log("The 3 is less than 2 "+(num2<num1));
// console.log("The 2 is less than or equal to 3 "+(num1<=num2));
// console.log("The 3 is less than or equal to 2 "+(num2<=num1));
// console.log("The 3 is greater than or equal to 2 "+(num2>=num1));
// console.log("The 2 is greater than or equal to 3 "+(num1>=num2));
//Test 4
// let num3:number =4;
// console.log("The 2 is less than 3 and 2 is also less than 4 "+((num1<num2)&&(num1<num3)));
// console.log("The 3 is less 2 and 3 is also than 4 "+((num2<num1)&&(num2<num3)));
// console.log("The 3 is less than 2 or 3 is less than 4 "+((num2<num1)||(num2<num3)));
// console.log("The 4 is less than 2 or 4 is less than 3 "+((num3<num1)||(num3<num2)));
//Test 6
// let numArray:number[]=[1,2,3,4,5];
// console.log("The number array is "+numArray);
// console.log("The 7 is in array of number ");
//Test 5
// console.log(numArray.indexOf(7)==-1?'false':'true');
// console.log("The 2 is in array of number ");
// console.log(numArray.indexOf(2)==-1?'false':'true');
//Program number 25
// successful scenario
//let Alien_Color:string="green";
// if(Alien_Color=="green")
// {
//     console.log("You just earned five points");
// }
//failed scenario
// Alien_Color="red";
// if(Alien_Color=="green")
// {
//     console.log("You just earned five points");
// }
// Program number 26
// let alien_Color:string="green";
//Execution of if only
// if(alien_Color=="green")
// {
//     console.log("You just earned five points");
// }
// else
// {
//     console.log("You just earned ten points");
// }
//Execution of else statement
// alien_Color="red"
// if(alien_Color=="green")
// {
//     console.log("You just earned five points");
// }
// else
// {
//     console.log("You just earned ten points");
// }
// //Program number 27 
// let AlienColor:string="red";
// if(AlienColor=="green")
// {
//     console.log("You earned 5 points");
// }
// else if(AlienColor=="yellow")
// {
//     console.log("You earned 10 points");
// }
// else if(AlienColor=="red")
// {
// console.log("You earned 15 points");
// }
// 
// Program number 28
//let favourite_fruit:string[]=["Strawberry","PineApple","Mango"];
// if(favourite_fruit.indexOf("Mango")!=-1)
// {
//     console.log("You really like Mango!");
// }
// if(favourite_fruit.indexOf("Banana")!=-1)
// {
//     console.log("You really like Banana");
// }
// if(favourite_fruit.indexOf("Strawberry")!=-1)
// {
//     console.log("You really like Strawberry");
// }
// if(favourite_fruit.indexOf("PineApple")!=-1)
// {
//     console.log("You really like PineApple");
// }
// if(favourite_fruit.indexOf("Apple")!=-1)
// {
//     console.log("You really like Apple");
// }
// //Program number 31
// let usernames:string[]=["admin","Afshan","Mahpara","Aiman","Asma"];
// let Length:number=usernames.length;
// for(var i=0;i<Length;i++)
// {
//     usernames.pop();
// }
// if(usernames.length==0)
// {
//     console.log("We need to find some users");
// }
// // Program number 34
// let favouritePizza:string[]=["Afghani Tikka","Chicken Fagita","Chicken Supreme","Behari Chicken"];
// for(var i=0;i<favouritePizza.length;i++)
// {
// console.log("I like "+favouritePizza[i]+".");
// }
// console.log("I love Pizza");
//Program number 35
// let animal:string[]=["Cat","Dog","Goat"];
// for(var i=0;i<animal.length;i++)
// {
//     console.log("A "+animal[i]+" would make a good pet");
// }
// console.log("All those animals would make a good pet");
// Program number 36
// function makeShirt(size:number,message:string):string
// {
//     let summary:string="The size of the shirt is: "+size+" and the message to printed is '"+message+"'";
//     return summary;
// }
// let Summary:string=makeShirt(34,"I am queen of my own world!");
// console.log(Summary);
//Program number 37
// 
// // Problem number 38
// function describe_city(city:string="Karachi",country:string="Pakistan")
// {
// console.log(city+" is in "+country);
// }
// describe_city("Islamabad");
// describe_city("Karachi");
// describe_city("Beijing","China");
// // Problem number 39
// function city_country(city:string,country:string):string
// {
//     let summary:string='"'+city+', '+country+'"';
// return summary;
// }
// console.log(city_country("Karachi","Pakistan"));
// console.log(city_country("Islamabad","Pakistan"));
// console.log(city_country("Beijing","China"));
// // Progrma number 40
// function make_Album(artistName:string,albumTitle:string,tracksOfAlbum:number=-1)
// {
// let Album=
// {
//     artist:artistName,
//     albumTitle:albumTitle,
//     NumberOfTracks:tracksOfAlbum
// };
// return Album;
// }
// let Album1=make_Album("Jal Pari","Atif Aslam",11);
// let Album2=make_Album("Lost in Qawwali III","Badar Ali Khan",5);
// let Album3=make_Album("Aatish","Fakkhir");
// console.log("First Album is: "+Album1.albumTitle+" and its artist is "+Album1.artist+"\n The number of tracks is: ");
// console.log(Album1.NumberOfTracks!=-1?Album1.NumberOfTracks:"not mentioned");
// console.log("Second Album is: "+Album2.albumTitle+" and its artist is "+Album2.artist+"\n The number of tracks is: ");
// console.log(Album2.NumberOfTracks!=-1?Album2.NumberOfTracks:"not mentioned");
// console.log("Third Album is: "+Album3.albumTitle+" and its artist is "+Album3.artist+"\n The number of tracks is: ")c;
// console.log(Album3.NumberOfTracks!=-1?Album3.NumberOfTracks:"not mentioned");
// //Program number 41
//  let MagiciansNames:string[]=["Muhammad Ijaz Mughal","Muhammad Yaseen","Mian Afzal Rashid","Shamsheer Razaq"];
// function showMagicians(MagiciansNames:string[])
// {
// for(var i=0;i<MagiciansNames.length;i++)
// {
//     console.log((i+1)+": "+MagiciansNames[i]);
// }
// }
// function makeGreat(MagiciansNames:string[])
// {
//     for(var i=0;i<MagiciansNames.length;i++)
//     {
//         var name=MagiciansNames[i];
//         MagiciansNames[i]="The Great "+MagiciansNames[i];
//     }
// }
// console.log("The names of Magicians before: ");
// showMagicians(MagiciansNames);
// makeGreat(MagiciansNames);
// console.log("The names of Magicians after: ");
// showMagicians(MagiciansNames);
// function makeGreat(MagiciansNames:string[])
// {
//     let newMagiciansName:string[]=[];
//     for(var i=0;i<MagiciansNames.length;i++)
//     {
//         var name=MagiciansNames[i];
//         newMagiciansName[i]="The Great "+MagiciansNames[i];
//     }
//     return newMagiciansName;
// }
// let GreatMagiciansName=makeGreat(MagiciansNames);
// console.log("The magician names before "+MagiciansNames);
// makeGreat(MagiciansNames);
// console.log("The magician names after "+MagiciansNames);
// makeGreat(MagiciansNames);
// console.log("The new Magician name array is "+GreatMagiciansName);
// //Program number 44
// function orderSandwich(sandwich:string[])
// {
//     console.log("The sandwich must contains: ");
//     for(var i=0;i<sandwich.length;i++)
//     {
//         console.log((i+1)+": "+sandwich[i]);
//     }
// }
// let sandwich1:string[]=["Tomatoes","Cheese","Onion"];
// let sandwich2:string[]=["Cheese","Onion","Peppers"];
// let sandwich3:string[]=["Onion","Peppers","Pickles"];
// let sandwich4:string[]=["Peppers","Pickles","Olives"];
// orderSandwich(sandwich1);
// orderSandwich(sandwich2);
// orderSandwich(sandwich3);
// orderSandwich(sandwich4);
//Program number 45
var Car = /** @class */ (function () {
    function Car(manufacturer, model, color, optionalFeature) {
        this.carManufacturer = manufacturer;
        this.carModel = model;
        this.carColor = color;
        this.carOptionalFeature = optionalFeature;
    }
    return Car;
}());
var car1 = new Car("Audi", "Model 2023", "Arrow Gray", "Automatic");
var car2 = new Car("Mehran", "Model 2010", "Red", "NEW light");
console.log(car1);
console.log(car2);
