(function () {
  const cfg = LETTER_CONFIG;
  const openBtn = document.getElementById("openBtn");
  const letter = document.getElementById("letter");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.title = "para " + cfg.herName;
  document.getElementById("coverDate").textContent = cfg.cover.date;
  document.getElementById("coverTitle").textContent = cfg.cover.title;
  document.getElementById("coverHint").textContent = cfg.cover.hint;
  document.getElementById("letterDate").textContent = cfg.letter.date;
  document.getElementById("letterTitle").textContent = cfg.letter.title;
  document.getElementById("letterSignOff").textContent = cfg.letter.signOff;
  document.getElementById("letterSignature").textContent = cfg.letter.signature;

  cfg.letter.paragraphs.forEach(function (text) {
    const p = document.createElement("p");
    p.textContent = text;
    document.getElementById("letterBody").appendChild(p);
  });

  function openLetter() {
    document.body.classList.add("is-open");
    openBtn.classList.add("is-away");
    letter.hidden = false;
    requestAnimationFrame(function () {
      letter.classList.add("is-shown");
    });
  }

  openBtn.addEventListener("click", function () {
    if (document.body.classList.contains("is-open")) return;
    if (reduced) {
      openLetter();
      return;
    }
    window.setTimeout(openLetter, 80);
  });
})();
