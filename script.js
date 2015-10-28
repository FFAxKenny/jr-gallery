// script.js
// Contains the javscript for kenny's gallery
//
// Goal 1: Change picture
// Goal 2: Change title and links
// Goal 3: Include other pictures, titles and links



var index = 0;
var pictures = [
                {
                    url: "http://www.midpac.edu/mypueo/downloads/hs/MidPacific_complete_stacked%20(2).jpg",
                    title: "Midpack"
                },
                {
                    url: "http://www.hawaii-all-inclusive.net/files/3318241/uploaded/all-inclusive-waikiki-hawaii-vacation-package.jpg",
                    title: "Hawaii"
                }
               ]

// Function that changes the source of the main picture
var changePicture = function(){
    document.getElementById("main-picture").src = pictures[index].url;

    document.getElementById("picture-title").innerHTML = pictures[index].title;

    document.getElementById("picture-link").innerHTML = pictures[index].url;
    document.getElementById("picture-link").href = pictures[index].url;

    // Update the index
    index = index + 1;
};


// Do changePicture() when the element 'forward' is clicked
document.getElementById("forward").addEventListener("click", function(){
    changePicture();
});
