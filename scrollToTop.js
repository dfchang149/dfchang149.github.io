// Get the button:
let button = document.getElementById("currentPageButton");
let goTopLabel = document.getElementById("goTop");
let pageButtons = document.getElementById("pageButtons");
let body = document.body;
let docElement =  document.documentElement;
let scrollBound = 50
let isOverPageButtons = false;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function mouseDownCurrPageButton() {
    if(goTopLabel.style.opacity > 0) {
        goTopLabel.style.transition = "visibility 0s ease-in-out 0.5s, opacity 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, padding 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s";
        goTopLabel.style.padding = "6px 20px";
        goTopLabel.style.transform = "scale(1) translateY(8px)";
    }
}

function mouseOverCurrPageButton() {
    if(body.scrollTop != 0 || docElement.scrollTop != 0) {
        goTopLabel.style.visibility = "visible";
        goTopLabel.style.opacity = 1;
        goTopLabel.style.transitionDelay = "0.5s";
        goTopLabel.style.padding = "8px 16px";
        goTopLabel.style.transform = "scale(1) translateY(0%)";
    }
}

function mouseLeaveCurrPageButton(bypass) {
    if(goTopLabel.style.opacity > 0 || bypass == true) {
        goTopLabel.style.transition = "visibility 0s ease-in-out 1s, opacity 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s, padding 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s";
        goTopDisappear(bypass);
    }
}

function goTopDisappear(bypass) {
    if(goTopLabel.style.opacity > 0 || bypass == true) {
        goTopLabel.style.opacity = 0;
        goTopLabel.style.padding = "8px 16px";
        goTopLabel.style.transform = "scale(0.8) translateY(-30%)"; 
        goTopLabel.style.visibility = "hidden";
    }
}

function mouseOverPageButtons() {
    if(body.scrollTop <= scrollBound && docElement.scrollTop <= scrollBound){
        pageButtons.style.backgroundColor = "#3c5c9c3d";
        pageButtons.style.border = "#7db1ff08 solid 1px";
    }
    isOverPageButtons = true;
    pageButtons.style.transform ="translateY(4px)";
}

function mouseLeavePageButtons() {
    if(body.scrollTop <= scrollBound && docElement.scrollTop <= scrollBound){
        pageButtons.style.backgroundColor = "#3c5c9c00";
        pageButtons.style.border = "#7db1ff00 solid 0px";
    }
    isOverPageButtons = false;
    pageButtons.style.transform ="translateY(0px)";
}

function scrollFunction() {
    if (body.scrollTop > scrollBound || docElement.scrollTop > scrollBound) {
        pageButtons.style.backgroundColor = "#3c5c9c6d";
        pageButtons.style.boxShadow = "0px 4px 8px #10062420";
        pageButtons.style.border = "#7db1ff15 solid 1px";
    } else {
        goTopLabel.style.transition = "visibility 0s ease-in-out 1s, opacity 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, padding 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s";
        mouseLeaveCurrPageButton();

        if (isOverPageButtons) {
            mouseOverPageButtons();
        } else {
            pageButtons.style.backgroundColor = "#3c5c9c00";
            pageButtons.style.border = "#7db1ff00 solid 0px";
        }
        pageButtons.style.boxShadow = "0px 4px 12px #10062400";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    goTopDisappear();
    body.scrollTop = 0; // For Safari
    docElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

goTopLabel.style.transition = "visibility 0s ease-in-out 1s, opacity 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, padding 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s";
mouseLeaveCurrPageButton(true);

scrollFunction();