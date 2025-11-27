import { ponies } from "../data/ponies";

// Генерація карток
const container = document.getElementById("heroCards");

ponies.forEach(pony => {
  const card = document.createElement("article");
  card.className = "hero-card";

  card.innerHTML = `
    <img src="${pony.img}" alt="${pony.name}">
    <div class="hero-info">
      <h3>${pony.name}</h3>
      <p>${pony.desc}</p>
    </div>
  `;

  container.appendChild(card);
});

// ==== Hover animation ====
document.addEventListener("mouseover", e => {
  if (e.target.closest(".hero-card")) {
    e.target.closest(".hero-card").classList.add("active");
  }
});
document.addEventListener("mouseout", e => {
  if (e.target.closest(".hero-card")) {
    e.target.closest(".hero-card").classList.remove("active");
  }
});

// ==== Scroll animation ====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

setTimeout(() => {
  document.querySelectorAll(".hero-card").forEach(card => observer.observe(card));
}, 50);

// ==== Search function ====
function searchPonies(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.toLowerCase();

  document.querySelectorAll(".hero-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    card.style.display =
      name.includes(query) || desc.includes(query)
        ? "flex"
        : "none";
  });
}
