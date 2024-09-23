
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
  try {
    document.getElementById("display").value = eval(expression);
  } catch {
    document.getElementById("display").value = "Error";
  }
};
