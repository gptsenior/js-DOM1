let display = document.getElementById("display");

let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach((button) => {
button.addEventListener("click", (e) => {
const value = e.target.getAttribute("data-value");

if (!display) return;

switch (value) {
case "AC":
display.innerText = "0";
break;

case "=":
try {
display.innerText = eval(display.innerText) || "0";
} catch (error) {
display.innerText = "Error!";
}
break;

case "+/-":
display.innerText = display.innerText.startsWith("-")
? display.innerText.slice(1)
: `-${display.innerText}`;
break;

case "%":
display.innerText = eval(display.innerText + "/100");
break;

default:
if (display.innerText === "0" && value !== ".") {
display.innerText = value;
} else {
display.innerText += value;
}
break;
}
});
});
