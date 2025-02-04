let effect = VANTA.NET({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xaee370,
    backgroundColor: 0xfcf8f1,
    points: 20.0,
    maxDistance: 27.0,
    spacing: 17.0,
});

document.addEventListener("DOMContentLoaded", () => {
  const btnQuizz = document.getElementById("btnQuizz");
  const btnCours = document.getElementById("btnCours");
  const buttonsBox = document.getElementById("buttonsBox");
  const quizOptions = document.getElementById("quizOptions");
  const btnBack = document.getElementById("btnBack");

  btnQuizz.addEventListener("click", () => {
      buttonsBox.style.display = "none";
      quizOptions.style.display = "flex";
  });

  btnBack.addEventListener("click", () => {
      quizOptions.style.display = "none";
      buttonsBox.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnEasy = document.getElementById("btnEasy");
  const btnMedium = document.getElementById("btnMedium");
  const btnHard = document.getElementById("btnHard");

  function changeBackground(color, bgColor) {
      effect.destroy(); // détruit l'effet actuel avant d'en recréer un nouveau
      effect = VANTA.NET({
          el: "#background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: color,
          backgroundColor: bgColor,
          points: 20.0,
          maxDistance: 27.0,
          spacing: 17.0,
      });
  }

  btnEasy.addEventListener("click", () => {
      changeBackground(0x6fe374, 0xf1fcf1);
  });

  btnMedium.addEventListener("click", () => {
      changeBackground(0xe3e06f, 0xfcfbf1);
  });

  btnHard.addEventListener("click", () => {
      changeBackground(0xe36f6f, 0xfcf1f1);
  });

  btnBack.addEventListener("click", () => {
      changeBackground(0xaee370, 0xfcf8f1);
  });
});