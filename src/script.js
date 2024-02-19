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
    }
  });

document.getElementById("copy-btn").addEventListener("click", function () {
  const referralLinkInput = document.getElementById("referral-link");
  referralLinkInput.select();
  document.execCommand("copy");

  const emailForm = document.getElementById("email-form");
  emailForm.reset();
});
