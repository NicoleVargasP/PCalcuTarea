import sumar from "./sumador";
import multiplicar from "./multiplicador";    


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value); 

  let resultado;
  if (event.submitter.id === "sumar-button") {
    resultado = sumar(firstNumber, secondNumber);
  } else if (event.submitter.id === "multiplicar-button") {
    resultado = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + resultado + "</p>"; 
});
