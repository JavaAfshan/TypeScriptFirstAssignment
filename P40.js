/**40.	Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
// Progrma number 40
function make_Album(artistName, albumTitle, tracksOfAlbum) {
    if (tracksOfAlbum === void 0) { tracksOfAlbum = -1; }
    var Album = {
        artist: artistName,
        albumTitle: albumTitle,
        NumberOfTracks: tracksOfAlbum
    };
    return Album;
}
var Album1 = make_Album("Jal Pari", "Atif Aslam", 11);
var Album2 = make_Album("Lost in Qawwali III", "Badar Ali Khan", 5);
var Album3 = make_Album("Aatish", "Fakkhir");
console.log("First Album is: " + Album1.albumTitle + " and its artist is " + Album1.artist + "\n The number of tracks is: ");
console.log(Album1.NumberOfTracks != -1 ? Album1.NumberOfTracks : "not mentioned");
console.log("Second Album is: " + Album2.albumTitle + " and its artist is " + Album2.artist + "\n The number of tracks is: ");
console.log(Album2.NumberOfTracks != -1 ? Album2.NumberOfTracks : "not mentioned");
console.log("Third Album is: " + Album3.albumTitle + " and its artist is " + Album3.artist + "\n The number of tracks is: ");
console.log(Album3.NumberOfTracks != -1 ? Album3.NumberOfTracks : "not mentioned");
