/**41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
//Program number 41
var MagiciansNames = ["Muhammad Ijaz Mughal", "Muhammad Yaseen", "Mian Afzal Rashid", "Shamsheer Razaq"];
function showMagicians(MagiciansNames) {
    for (var i = 0; i < MagiciansNames.length; i++) {
        console.log((i + 1) + ": " + MagiciansNames[i]);
    }
}
showMagicians(MagiciansNames);
