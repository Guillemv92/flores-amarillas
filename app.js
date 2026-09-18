(function () {
  const cfg = LETTER_CONFIG;
  const openBtn = document.getElementById("openBtn");
  const letter = document.getElementById("letter");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.title = "para " + cfg.herName;

  function fillOrHide(id, text) {
    const el = document.getElementById(id);
    if (!text) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    el.textContent = text;
  }

  fillOrHide("coverDate", cfg.cover.date);
  document.getElementById("coverTitle").textContent = cfg.cover.title;
  document.getElementById("coverHint").textContent = cfg.cover.hint;
  fillOrHide("letterDate", cfg.letter.date);
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
