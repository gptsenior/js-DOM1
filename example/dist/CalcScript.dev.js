"use strict";

var display = document.getElementById("display");
var buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var value = e.target.getAttribute("data-value");
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
        display.innerText = display.innerText.startsWith("-") ? display.innerText.slice(1) : "-".concat(display.innerText);
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
//# sourceMappingURL=CalcScript.dev.js.map
