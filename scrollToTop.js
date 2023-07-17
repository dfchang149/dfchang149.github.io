// Get the button:
let button = document.getElementById("currentPageButton");
let goTopLabel = document.getElementById("goTop");
let pageButtons = document.getElementById("pageButtons");
let body = document.body;
let docElement =  document.documentElement;
let scrollBound = 50

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function mouseDownCurrPageButton() {
    if(goTopLabel.style.opacity > 0) {
        goTopLabel.style.transitionDelay = "0s";
        goTopLabel.style.padding = "6px 20px";
        goTopLabel.style.transform = "scale(1) translateY(8px)";
    }
}

function mouseOverCurrPageButton() {
    if(body.scrollTop != 0 || docElement.scrollTop != 0) {
        goTopLabel.style.opacity = 1;
        goTopLabel.style.scale = 1;
        goTopLabel.style.transitionDelay = "0.5s";
        goTopLabel.style.padding = "8px 16px";
        goTopLabel.style.transform = "scale(1) translateY(0%)";
    }
}

function mouseLeaveCurrPageButton(bypass) {
    if(goTopLabel.style.opacity > 0 || bypass == true) {
        goTopLabel.style.opacity = 0;
        goTopLabel.style.padding = "8px 16px";
        goTopLabel.style.transform = "scale(0.8) translateY(-30%)";    
    }
}

function mouseOverPageButtons() {
    if(body.scrollTop <= scrollBound && docElement.scrollTop <= scrollBound){
        pageButtons.style.backgroundColor = "#3c5c9c3d";
        pageButtons.style.border = "#7db1ff08 solid 1px";
    }
    pageButtons.style.transform ="translateY(4px)";
    //pageButtons.style.transform ="scale(1.01)";
}

function mouseLeavePageButtons() {
    if(body.scrollTop <= scrollBound && docElement.scrollTop <= scrollBound){
        pageButtons.style.backgroundColor = "#3c5c9c00";
        pageButtons.style.border = "#7db1ff00 solid 0px";
    }
    pageButtons.style.transform ="translateY(0px)";
    //pageButtons.style.transform ="scale(1)";
}

function scrollFunction() {
    if (body.scrollTop > scrollBound || docElement.scrollTop > scrollBound) {
        pageButtons.style.backgroundColor = "#3c5c9c6d";
        pageButtons.style.boxShadow = "0px 4px 8px #10062420";
        pageButtons.style.border = "#7db1ff15 solid 1px";
    } else {
        goTopLabel.style.transitionDelay = "0s";
        mouseLeaveCurrPageButton();

        pageButtons.style.backgroundColor = "#3c5c9c00";
        pageButtons.style.boxShadow = "0px 4px 12px #10062400";
        pageButtons.style.border = "#7db1ff00 solid 0px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    goTopLabel.style.transitionDelay = "0s";
    mouseLeaveCurrPageButton();
    body.scrollTop = 0; // For Safari
    docElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

goTopLabel.style.transitionDelay = "0s";
mouseLeaveCurrPageButton(true);

scrollFunction();