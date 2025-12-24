/* ================= HAMBURGER ================= */
function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* ================= REVEAL ================= */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll(){
    const h = window.innerHeight;
    reveals.forEach(el=>{
      if(el.getBoundingClientRect().top < h - 100){
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

/* ================= NAVBAR SCROLL ================= */
const navbar = document.querySelector(".nav");
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 60){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }
});

/* ================= DARK MODE ================= */
const darkToggle = document.getElementById("darkToggle");
if(darkToggle){
  darkToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
}

/* ================= MULTI LANGUAGE (OPTIONAL) ================= */
function setLang(lang){
  const t = {
    id:{
      hero_title:"PT ALSINAR INDO ABADI",
      hero_subtitle:"General Supplier & Contractor Terpercaya",
      hero_cta:"Hubungi Kami"
    },
    en:{
      hero_title:"PT ALSINAR INDO ABADI",
      hero_subtitle:"Trusted General Supplier & Contractor",
      hero_cta:"Contact Us"
    }
  };
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t[lang][el.dataset.i18n] || el.textContent;
  });
}
