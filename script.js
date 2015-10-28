// script.js
// Contains the javscript for kenny's gallery
//
// Goal 1: Change picture
// Goal 2: Change title and links
// Goal 3: Include other pictures, titles and links

var new_picture = "http://www.midpac.edu/mypueo/downloads/hs/MidPacific_complete_stacked%20(2).jpg"

// Function that changes the source of the main picture
var changePicture = function(){
    document.getElementById("main-picture").src = new_picture;
};

// Do changePicture() when the element 'forward' is clicked
document.getElementById("forward").addEventListener("click", function(){
    changePicture();
});
