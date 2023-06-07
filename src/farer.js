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

avhengighet.addEventListener("mouseenter", () => {
  avhengighetText.style.display = "block";
});

avhengighet.addEventListener("mouseleave", () => {
  avhengighetText.style.display = "none";
});

ulykker.addEventListener("mouseenter", () => {
  ulykkerText.style.display = "block";
});

ulykker.addEventListener("mouseleave", () => {
  ulykkerText.style.display = "none";
});

//Nav
const tekst1 = document.getElementById("tekst1");
const bilde = document.getElementById("bilde");
const tekst2 = document.getElementById("tekst2");

//Navigering
const navigering = document.getElementById("navigering");

//Display
const tekst1Text = document.getElementById("tekst1Text");
const bildeImg = document.getElementById("bildeImg");
const tekst2Text = document.getElementById("tekst2Text");

//States
let showTekst1 = true;
let showBilde = false;
let showTekst2 = false;

//Eventlisteners
tekst1.addEventListener("click", () => {
  tekst1Text.style.display = "flex";
  showTekst1 = true;
  tekst1.style.backgroundColor = "red";
  bilde.style.backgroundColor = "transparent";
  tekst2.style.backgroundColor = "transparent";
  if (showBilde) {
    showBilde = false;
    bildeImg.style.display = "none";
  }
  if (showTekst2) {
    showTekst2 = false;
    tekst2Text.style.display = "none";
  }
});

bilde.addEventListener("click", () => {
  bildeImg.style.display = "block";
  showBilde = true;
  tekst1.style.backgroundColor = "transparent";
  bilde.style.backgroundColor = "red";
  tekst2.style.backgroundColor = "transparent";
  if (showTekst1) {
    showTekst1 = false;
    tekst1Text.style.display = "none";
  }
  if (showTekst2) {
    showTekst2 = false;
    tekst2Text.style.display = "none";
  }
});

tekst2.addEventListener("click", () => {
  tekst2Text.style.display = "flex";
  showTekst2 = true;
  tekst1.style.backgroundColor = "transparent";
  bilde.style.backgroundColor = "transparent";
  tekst2.style.backgroundColor = "red";
  if (showTekst1) {
    showTekst1 = false;
    tekst1Text.style.display = "none";
  }
  if (showBilde) {
    showBilde = false;
    bildeImg.style.display = "none";
  }
});
