function main() {
  let num1;
  let num2;
  let operator = "";

  const display = document.querySelector(".display p");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      const buttonText = button.textContent;
      display.textContent = buttonText;

      if (Number.isInteger(+buttonText)) {
        if (num1 === undefined) {
          num1 = buttonText;
        } else {
          num2 = buttonText;
        }
      } else {
        operator = buttonText;
      }
      console.log(num1, operator, num2);

    });
  });

}

main();
