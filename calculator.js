
const clearDisplay = () => (document.getElementById("display").value = "");

const deleteLast = () => {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
};

const appendCharacter = (char) => {
  document.getElementById("display").value += char;
};

const calculate = () => {
  let expression = document.getElementById("display").value;
  let operator;
  let result;

  if (expression.includes("+")) {
    operator = "+";
  } else if (expression.includes("-")) {
    operator = "-";
  } else if (expression.includes("*")) {
    operator = "*";
  } else if (expression.includes("/")) {
    operator = "/";
  } else {
    alert("Invalid expression");
    return;
  }

  let int = expression.split(operator);
  let int1 = parseFloat(int[0]); 
  let int2 = parseFloat(int[1]);
  switch (operator) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = int1 * int2;
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      alert("Invalid operator");
      return;
  }

  document.getElementById("display").value = result;
};
