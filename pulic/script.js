const serverButton = document.getElementById("serverButton");
const serverMessage = document.getElementById("serverMessage");
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

serverButton.addEventListener("click", async () => {
  serverMessage.textContent = "Loading data from the server...";

  try {
    const response = await fetch("/api/message");

    if (!response.ok) {
      throw new Error("The request failed.");
    }

    const data = await response.json();

    serverMessage.textContent = `${data.message} Server time: ${data.date}`;
  } catch (error) {
    serverMessage.textContent = "Could not contact the server.";

    console.error(error);
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  formResult.textContent =
    `Thank you, ${nameInput.value}. We received your message from ${emailInput.value}.`;

  contactForm.reset();
});