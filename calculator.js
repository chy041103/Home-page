const calculationDisplay = document.getElementById("calculation");
const resultDisplay = document.getElementById("result");
let input = "";

function updateDisplay() {
  calculationDisplay.textContent = input;
  try {
    if (/^[0-9+\-*/.() ]+$/.test(input)) {
      resultDisplay.textContent = eval(input);
    } else {
      resultDisplay.textContent = "";
    }
  } catch {
    resultDisplay.textContent = "";
  }
}

function handleInput(value) {
  if (value === "=" || value === "Enter") {
    try {
      input = eval(input).toString();
    } catch {
      input = "Error";
    }
  } else if (value === "Backspace") {
    input = input.slice(0, -1);
  } else {
    input += value;
  }
  updateDisplay();
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    handleInput(value);
  });
});

document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/().";
  if (validKeys.includes(e.key)) {
    handleInput(e.key);
  } else if (e.key === "Enter") {
    handleInput("Enter");
  } else if (e.key === "Backspace") {
    handleInput("Backspace");
  }
});
