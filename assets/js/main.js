const text = ["Taha Ben Chaaben", "Développeur Web", "Créatif", "Curieux"];
let index = 0;
let i = 0;

function typing() {
  if (i < text[index].length) {
    document.querySelector('.typing').textContent += text[index].charAt(i);
    i++;
    setTimeout(typing, 100);
  } else {
    setTimeout(() => {
      document.querySelector('.typing').textContent = "";
      index = (index + 1) % text.length;
      i = 0;
      typing();
    }, 2000);
  }
}
typing();
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 3500);
  });
  const scrollTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollTop.style.display = "block";
    } else {
      scrollTop.style.display = "none";
    }
  });
  
  