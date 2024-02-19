const navbar = document.getElementById("navbar");
const panelControl = document.getElementById("panel-control");

const burguerMenu = document.getElementById("burguer-menu");
const closeBtn = document.getElementById("close-btn");

let isBurguerVisible = true;

navbar.addEventListener("click", function () {
  panelControl.classList.toggle("visible");

  if (isBurguerVisible) {
    burguerMenu.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    burguerMenu.style.display = "block";
    closeBtn.style.display = "none";
  }

  isBurguerVisible = !isBurguerVisible;
});

document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("user-email");
    const email = emailInput.value.trim();

    const correctEmail = document.getElementById("correct-email");
    const invalidEmail = document.getElementById("invalid-email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
      invalidEmail.style.display = "block";
      correctEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      correctEmail.style.display = "flex";

      document.getElementById("email-form").style.display = "none";
      document.getElementById("referral-form").style.display = "flex";

      const encodedEmail = btoa(email);
      const referralLinkInput = document.getElementById("referral-link");
      referralLinkInput.value = `https://ratepunk.com/referral?email=${encodedEmail}`;

      saveEmailToJSONBin(email);
    }
  });

document.getElementById("copy-btn").addEventListener("click", function () {
  const referralLinkInput = document.getElementById("referral-link");
  referralLinkInput.select();
  document.execCommand("copy");

  const emailForm = document.getElementById("email-form");
  emailForm.reset();
});

function saveEmailToJSONBin(email) {
    const API_URL = 'https://api.jsonbin.io/v3/b/65d2b463dc74654018a6aa44';
    const API_KEY = '$2a$10$MQIlf4ANAoy2NKiPlasej.u0zjRB0Yx/AImSslyGRIr8xNf5hcwOO';
  
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify({
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email saved successfully:', data);
    })
    .catch(error => {
      console.error('Error saving email:', error);
    });
  }