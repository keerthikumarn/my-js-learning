const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor); //bg will converted into RGB

const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

var orangeColorElement = getBgColor(orange);
console.log(getBgColor(pink));
//console.log(getBgColor(orange));
//console.log(getBgColor(violet));

const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    })
}

colorChanger(red, getBgColor(red));
colorChanger(orange, getBgColor(orange));
colorChanger(cyan, getBgColor(cyan));
colorChanger(pink, getBgColor(pink));
colorChanger(violet, getBgColor(violet));