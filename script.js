const textarea = document.getElementById("message");
  const counter = document.getElementById("charCounter");
  const warning = document.getElementById("warningMsg");

  const maxChars = 200;

  textarea.addEventListener("input", function () {
    const typedChars = textarea.value.length;

    // Update counter
    counter.textContent = `${typedChars}/${maxChars} characters`;

    // Warning message if limit reached
    if (typedChars >= maxChars) {
      warning.textContent = "You have reached the maximum character limit!";
    } else {
      warning.textContent = "";
    }

    // Prevent typing beyond limit (safety check)
    if (typedChars > maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
    }
  });