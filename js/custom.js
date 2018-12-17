
//Get height of element
var trusteeHeight = document.getElementById("trustee").clientHeight;

// Get the header
var trusteeHeader = document.getElementById("trustee");

var trusteeSticky = trusteeHeader.offsetTop;



//Get height of element
var staffHeight = document.getElementById("staff").clientHeight;

// Get the header
var staffHeader = document.getElementById("staff");

var staffSticky = staffHeader.offsetTop;


// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction("sticky", trusteeHeight, trusteeHeader, trusteeSticky);
    myFunction("sticky", staffHeight, staffHeader, staffSticky);
};


// Get the offset position of the navbar
var sticky = header.offsetTop;



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(id, height, header, sticky) {
    if (window.pageYOffset > (sticky-height)) {
        header.classList.add(id);
    } else {
        header.classList.remove(id);
    }
}