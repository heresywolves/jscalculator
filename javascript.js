function operate(num1, num2, operator) {
  switch(operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

function main() {
  let num1;
  let num2;
  let operator = "";

  const display = document.querySelector(".display p");
  const resultDisplay = document.querySelector("p .result");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      const buttonText = button.textContent;
      if (!buttonText) return;

      if (buttonText === 'AC') {

        display.textContent = '';
        num1 = undefined;
        num2 = undefined;
        operator = "";
      } else if (buttonText === 'DEL') {
          display.textContent = display.textContent.slice(0,-1);
      } else {

        if (display.textContent === operator) {
          display.textContent = '';
        }

        if(buttonText === '=') {
          num2 = +display.textContent;
          let result = operate(num1, num2, operator);
          display.textContent = result;
          num1 = result;
        } else {
          if (Number.isInteger(+buttonText)) {
            display.textContent += buttonText;
          } else {
            if (buttonText === '.') {
              display.textContent += '.';
            } else {
              operator = buttonText;
              if (num1 === undefined) {
                num1 = +display.textContent;
              } 
              display.textContent = operator;
            }
          }
        }
      }

      console.log(num1, operator, num2);




    });
  });

}

main();
