// hey, my love! you're in the right place :)

const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const messageDiv = document.getElementById("message");
const countdownDiv = document.getElementById("countdown");

let attempts = 0;
let timer = null;

function disableForm(seconds) {
    submitButton.disabled = true;
    passwordInput.disabled = true;
    countdownDiv.textContent = `Try again in ${seconds} seconds.`;

    let remaining = seconds;
    timer = setInterval(() => {
        remaining--;
        if (remaining > 0) {
            countdownDiv.textContent = `Try again in ${remaining} seconds.`;
        } else {
            enableForm();
        }
    }, 1000);
}

function enableForm() {
    clearInterval(timer);
    submitButton.disabled = false;
    passwordInput.disabled = false;
    countdownDiv.textContent = "";
    attempts = 0;
}

const TOTALLY_NOT_THE_PASSWORD = "ya-tebya-lyublyu"; // <3

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userPassword = passwordInput.value.trim();

    if (userPassword === TOTALLY_NOT_THE_PASSWORD) {
        messageDiv.textContent = "🎉 Correct! You've cracked the code!";
        messageDiv.classList.remove("text-red-500");
        messageDiv.classList.add("text-green-500");
    } else {
        attempts++;
        messageDiv.textContent = "❌ Incorrect password. Try again.";
        if (attempts >= 2) {
            disableForm(60); // Disable form for 60 seconds after two failed attempts
        }
    }

    passwordInput.value = "";
});
