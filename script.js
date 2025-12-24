
// MOBILE MENU
function toggleMenu(){
  const menu=document.getElementById("menu");
  menu.style.display = menu.style.display==="flex"?"none":"flex";
}
// ===== LIGHTBOX GALLERY =====
document.querySelectorAll(".gallery-grid img").forEach(img=>{
  img.addEventListener("click",()=>{
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
  });
});

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}
/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(el=>{
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* ================= NAVBAR SCROLL ================= */
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if(window.scrollY > 60){
    navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove('scrolled');
  }
});
/* ================= TRANSLATIONS ================= */
const translations = {
  id: {
    hero_title: "PT ALSINAR INDO ABADI",
    hero_subtitle: "General Supplier & Contractor Terpercaya",
    hero_cta: "Hubungi Kami",

    nav_home: "Home",
    nav_services: "Layanan",
    nav_about: "Tentang",
    nav_gallery: "Galeri",
    nav_contact: "Kontak",

    services_title: "Layanan Kami",
    service_1: "General Supplier",
    service_2: "Manajemen Scrap Iron (Besi Tua)",
    service_3: "Kontraktor dan Konstruksi",

    about_title: "Tentang Perusahaan",
    about_desc:
      "PT Alsinar Indo Abadi adalah perusahaan yang bergerak di bidang General Supplier & Contractor dengan komitmen memberikan layanan profesional, berkualitas tinggi, dan berkelanjutan.",

    vision_title: "Visi",
    vision_desc:
      "Menjadi perusahaan penyedia layanan terpadu yang terpercaya, profesional, dan unggul dalam mendukung kebutuhan industri nasional.",

    mission_title: "Misi",
    mission_1: "Memberikan layanan General Supplier & Contractor yang berkualitas",
    mission_2: "Mengutamakan kepuasan klien melalui solusi yang efisien",
    mission_3: "Membangun hubungan jangka panjang berbasis integritas",
    mission_4: "Mendukung praktik bisnis berkelanjutan dan ramah lingkungan",

    gallery_title: "Galeri Proyek"
  },

  en: {
    hero_title: "PT ALSINAR INDO ABADI",
    hero_subtitle: "Trusted General Supplier & Contractor",
    hero_cta: "Contact Us",

    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    services_title: "Our Services",
    service_1: "General Supplier",
    service_2: "Scrap Iron Management",
    service_3: "Contractor & Construction",

    about_title: "About Company",
    about_desc:
      "PT Alsinar Indo Abadi is a company engaged in General Supplier & Contractor services with a strong commitment to professionalism, quality, and sustainability.",

    vision_title: "Vision",
    vision_desc:
      "To become a trusted, professional, and leading integrated service provider supporting national industry needs.",

    mission_title: "Mission",
    mission_1: "Provide high-quality General Supplier & Contractor services",
    mission_2: "Prioritize client satisfaction through efficient solutions",
    mission_3: "Build long-term relationships based on integrity",
    mission_4: "Support sustainable and environmentally friendly business practices",

    gallery_title: "Project Gallery"
  }
};

/* ================= LANGUAGE SWITCH ================= */
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "id");
});
