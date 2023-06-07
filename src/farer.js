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

//Avhengighet

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

//Avhengighet

//Nav
const tekst3 = document.getElementById("tekst3");
const bilde2 = document.getElementById("bilde2");
const tekst4 = document.getElementById("tekst4");

//Display
const tekst3Text = document.getElementById("tekst3Text");
const bilde2Img = document.getElementById("bilde2Img");
const tekst4Text = document.getElementById("tekst4Text");

//States
let showTekst3 = true;
let showBilde2 = false;
let showTekst4 = false;

//Eventlisteners
tekst3.addEventListener("click", () => {
  tekst3Text.style.display = "flex";
  showTekst3 = true;
  tekst3.style.backgroundColor = "red";
  bilde2.style.backgroundColor = "transparent";
  tekst4.style.backgroundColor = "transparent";
  if (showBilde2) {
    showBilde2 = false;
    bilde2Img.style.display = "none";
  }
  if (showTekst4) {
    showTekst4 = false;
    tekst4Text.style.display = "none";
  }
});

bilde2.addEventListener("click", () => {
  bilde2Img.style.display = "block";
  showBilde2 = true;
  tekst3.style.backgroundColor = "transparent";
  bilde2.style.backgroundColor = "red";
  tekst4.style.backgroundColor = "transparent";
  if (showTekst3) {
    showTekst3 = false;
    tekst3Text.style.display = "none";
  }
  if (showTekst4) {
    showTekst4 = false;
    tekst4Text.style.display = "none";
  }
});

tekst4.addEventListener("click", () => {
  tekst4Text.style.display = "flex";
  showTekst4 = true;
  tekst3.style.backgroundColor = "transparent";
  bilde2.style.backgroundColor = "transparent";
  tekst4.style.backgroundColor = "red";
  if (showTekst3) {
    showTekst3 = false;
    tekst3Text.style.display = "none";
  }
  if (showBilde2) {
    showBilde2 = false;
    bilde2Img.style.display = "none";
  }
});

//Ulykker

//Nav
const tekst5 = document.getElementById("tekst5");
const bilde3 = document.getElementById("bilde3");
const tekst6 = document.getElementById("tekst6");

//Display
const tekst5Text = document.getElementById("tekst5Text");
const bilde3Img = document.getElementById("bilde3Img");
const tekst6Text = document.getElementById("tekst6Text");

//States
let showTekst5 = true;
let showBilde3 = false;
let showTekst6 = false;

//Eventlisteners
tekst5.addEventListener("click", () => {
  tekst5Text.style.display = "flex";
  showTekst5 = true;
  tekst5.style.backgroundColor = "red";
  bilde3.style.backgroundColor = "transparent";
  tekst6.style.backgroundColor = "transparent";
  if (showBilde3) {
    showBilde3 = false;
    bilde3Img.style.display = "none";
  }
  if (showTekst6) {
    showTekst6 = false;
    tekst6Text.style.display = "none";
  }
});

bilde3.addEventListener("click", () => {
  bilde3Img.style.display = "block";
  showBilde3 = true;
  tekst5.style.backgroundColor = "transparent";
  bilde3.style.backgroundColor = "red";
  tekst6.style.backgroundColor = "transparent";
  if (showTekst5) {
    showTekst5 = false;
    tekst5Text.style.display = "none";
  }
  if (showTekst6) {
    showTekst6 = false;
    tekst6Text.style.display = "none";
  }
});

tekst6.addEventListener("click", () => {
  tekst6Text.style.display = "flex";
  showTekst6 = true;
  tekst5.style.backgroundColor = "transparent";
  bilde3.style.backgroundColor = "transparent";
  tekst6.style.backgroundColor = "red";
  if (showTekst5) {
    showTekst5 = false;
    tekst5Text.style.display = "none";
  }
  if (showBilde3) {
    showBilde3 = false;
    bilde3Img.style.display = "none";
  }
});
