const helse = document.getElementById("helse");
const avhengighet = document.getElementById("avhengighet");
const ulykker = document.getElementById("ulykker");

const helseText = document.getElementById("helseText");
const avhengighetText = document.getElementById("avhengighetText");
const ulykkerText = document.getElementById("ulykkerText");

helse.addEventListener("mouseenter", () => {
  helseText.style.display = "block";
});

helse.addEventListener("mouseleave", () => {
  helseText.style.display = "none";
});
