document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("aboutToggle");
  const more = document.getElementById("aboutMore");

  if (!btn || !more) {
    console.warn("About toggle elements not found:", { btn, more });
    return;
  }

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  const syncAbout = () => {
    if (!isMobile()) {
      more.classList.remove("open");
      more.style.display = "block";
      btn.style.display = "none";
      btn.textContent = "Read more";
    } else {
      more.style.display = ""; // let CSS control it
      btn.style.display = "inline-block";
    }
  };

  btn.addEventListener("click", () => {
    more.classList.toggle("open");
    btn.textContent = more.classList.contains("open") ? "Read less" : "Read more";
  });

  window.addEventListener("resize", syncAbout);
  syncAbout();
});
