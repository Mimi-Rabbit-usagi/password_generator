"use strict";
{
  function showPassword() {
    const result = document.getElementById("result");
    const numbersCheckbox = document.getElementById("numbers-checkbox");
    const symbolsCheckbox = document.getElementById("symbols-checkbox");
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!#$%&()@";
    let password = "";
    let seed = letters + letters.toUpperCase();
    let mustInclude = [];

    if (numbersCheckbox.checked) {
      seed += numbers;
      mustInclude.push(getRandomChar(numbers));
    }
    if (symbolsCheckbox.checked) {
      seed += symbols;
      mustInclude.push(getRandomChar(symbols));
    }

    password += mustInclude.join("");

    for (let i = 0; i < slider.value; i++) {
      password += getRandomChar(seed);
    }
    password = shuffleString(password);

    result.textContent = password;
  }

  function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }

  function shuffleString(str) {
    let array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }

  const slider = document.getElementById("slider");
  const btn = document.getElementById("btn");

  slider.addEventListener("input", () => {
    const passwordLength = document.getElementById("password-length");

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener("click", () => {
    showPassword();
  });
  showPassword();
}
