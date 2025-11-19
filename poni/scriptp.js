
const ponies = [
  {
    name: "fallenstar",
    img: "image/fallenstar_base.png",
    desc: "Павша зірка, що кинула виклик самій долі."
  },
  {
    name: "moonlight Shadow",
    img: "image/moonlight_base.png",
    desc: "Одна із учениць школи принцеси Селестії зі здатністю до темної магії. Поні, доля якої була переписана..."
  },
  {
    name: "SonorousNote",
    img: "image/SonorousNote_base.png",
    desc: "Весела кобилка з музичним талантом, тернистий життєвий шлях якої привів її до Падших."
  },
  {
    name: "supernova",
    img: "image/supernova_base.png",
    desc: "Майстер темної магії, та на відміну від свого статусу, м'яка та грайлива поні."
  },
  {
    name: "StellaMinor",
    img: "image/StellaMinor_base.png",
    desc: "Юна поні, що подорослішала надто рано. Головний інженер ховера дев'ятої групи."
  },
  {
    name: "Twilight Sparkle",
    img: "image/TwilightSparkle_base.webp",
    desc: "Вірна учениця принцеси Селестії, що змогла пізнати дружбу та стати її втіленням."
  },
  {
    name: "Rainbow Dash",
    img: "image/RainbowDash_base.webp",
    desc: "Професійна літунка, що прагне бути найкращою у своїй справі. Елемент Вірності."
  },
  {
    name: "Applejack",
    img: "image/Applejack_base.png.png",
    desc: "Чесна й працьовита поні, що завжди тримає слово. Її сила — у щирості."
  },
  {
    name: "Rarity",
    img: "image/Rarity_base.png",
    desc: "Дизайнер одягу, що бачить красу у всьому. Елегантна та щедра кобилка."
  },
  {
    name: "Fluttershy",
    img: "image/Fluttershy_base.webp",
    desc: "Сором'язлива та добра поні, що гарно ладнає з тваринами."
  },
  {
    name: "Pinkie Pie",
    img: "image/PimkiePie_base.png",
    desc: "Весела й непосидюча, завжди дарує усмішки. Її мета – робити інших щасливими."
  }
];

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
