// ============================
// Appointment Form Validation
// ============================
const form = document.querySelector(".header__form form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      isValid = false;
    } else {
      input.style.border = "2px solid green";
    }
  });

  if (isValid) {
    alert("✅ Appointment booked successfully!");
    form.reset();
    inputs.forEach(input => (input.style.border = "1px solid #ccc"));
  } else {
    alert("❌ Please fill all the fields.");
  }
});


// ============================
// Smooth Scroll for Navbar
// ============================
document.querySelectorAll(".nav__links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");

    if (target !== "#") {
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});


// ============================
// Doctors Slider (Basic)
// ============================
const doctorsGrid = document.querySelector(".doctors__grid");
const prevBtn = document.querySelector(".ri-arrow-left-line");
const nextBtn = document.querySelector(".ri-arrow-right-line");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  doctorsGrid.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  doctorsGrid.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});


// ============================
// Button Hover Effect (JS)
// ============================
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});
