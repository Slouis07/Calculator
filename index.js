const display = document.getElementById("display");

function appendToDisplay(input) {
  // parameter: input (string) - the number or operator to be appended to the display
  display.value += input;
  // explains: sets the value of the display to the current value plus the input
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
    // evaluates the mathematical expression contained in the display's value and sets the display's value to the result
  } catch (error) {
    display.value = "Error";
  }
}
