document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keyboard = document.getElementById("keyboard");
  let input = "";

  function shuffle(array) {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function renderKeyboard() {
    keyboard.innerHTML = "";
    const numbers = shuffle([...Array(9).keys()].map(n => n + 1)); // 1 al 9

    // Insertar 3x3
    numbers.forEach(number => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = number;
      key.dataset.original = number;
      key.addEventListener("click", () => handleKey(number));
      key.addEventListener("mouseenter", () => key.textContent = "*");
      key.addEventListener("mouseleave", () => key.textContent = key.dataset.original);
      keyboard.appendChild(key);
    });

    // Crear fila: Borrar - 0 - Ingresar
    const clearBtn = document.createElement("div");
    clearBtn.className = "special";
    clearBtn.textContent = "Borrar";
    clearBtn.addEventListener("click", () => {
      input = "";
      updateDisplay();
    });

    const zeroKey = document.createElement("div");
    zeroKey.className = "key";
    zeroKey.textContent = "0";
    zeroKey.dataset.original = "0";
    zeroKey.addEventListener("click", () => handleKey(0));
    zeroKey.addEventListener("mouseenter", () => zeroKey.textContent = "*");
    zeroKey.addEventListener("mouseleave", () => zeroKey.textContent = zeroKey.dataset.original);

    const enterBtn = document.createElement("div");
    enterBtn.className = "special";
    enterBtn.textContent = "Ingresar";
    enterBtn.addEventListener("click", () => {
      alert("Contraseña ingresada: " + input);
    });

    // Añadir la última fila en orden: Borrar - 0 - Ingresar
    keyboard.appendChild(clearBtn);
    keyboard.appendChild(zeroKey);
    keyboard.appendChild(enterBtn);
  }

  function handleKey(number) {
    if (input.length < 4) {
      input += number;
      updateDisplay();
    }
  }

  function updateDisplay() {
    display.textContent = input.padEnd(4, "_ ").trim();
  }

  renderKeyboard();
});
