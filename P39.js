/**39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
 */
// Problem number 39
function city_country(city, country) {
    var summary = '"' + city + ', ' + country + '"';
    return summary;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Beijing", "China"));
