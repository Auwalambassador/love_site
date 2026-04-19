const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Typing effect
function typeText(text) {
  message.innerHTML = "";
  let i = 0;

  let interval = setInterval(() => {
    message.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

// YES button
yesBtn.addEventListener("click", () => {
  typeText("Aww 🥰 I love you more than words can explain 💖✨ You make my world complete ❤️");
});

// Function to move NO button
function moveNoButton() {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Run away on hover
noBtn.addEventListener("mouseover", moveNoButton);

// Run away on click attempt
noBtn.addEventListener("mousedown", (e) => {
  e.preventDefault(); // stops click
  moveNoButton();
});

// Run away when cursor gets close 😈
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  let distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 100) {
    moveNoButton();
  }
});
