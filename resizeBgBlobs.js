// Experimenting with stuff

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top,
        height: rect.height
    };
}

var footer = document.getElementsByClassName("footer")[0];
var footerPosY = getOffset(footer).top;

var blob1 = document.getElementById("blob2");
var blob1Offset = getOffset(blob1);
var excessHeight = Math.max(0,blob1Offset.top+blob1Offset.height-footerPosY);
var newSizeY = 220-excessHeight;

var div = document.createElement("div");
div.style.position = "absolute";
div.style.width = "100px";
div.style.height = document.getElementById("contents").getBoundingClientRect().height;
div.style.top = "0";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.body.appendChild(div);

blob1.setAttribute("viewBox", "50 -50 200 "+(220-excessHeight));