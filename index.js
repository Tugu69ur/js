const percentage = (tip, value) => {
  let per = (value / tip);
  return per;
};

const NiitDun = (tip, value) => {
  let sum = tip + value;
  return sum;
};

let value = Number(prompt("Cost?"));

let tip = Number(prompt("Tip?"));

alert('Total amount:'+NiitDun(tip, value));
alert("Tip:" + percentage(tip, value)+"%");