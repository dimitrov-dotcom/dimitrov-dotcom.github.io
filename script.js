// REVEAL
document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight){
    el.classList.add("active");
  }
});
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

// DARK MODE
document.getElementById("darkToggle").onclick=()=>{
  document.body.classList.toggle("dark");
};

// MENU
function toggleMenu(){
  const menu=document.getElementById("menu");
  menu.style.display=menu.style.display==="flex"?"none":"flex";
}

// MULTI LANGUAGE
const texts={
  id:{
    nav_home:"Home",
    nav_services:"Layanan",
    nav_about:"Tentang",
    nav_contact:"Kontak",
    hero_title:"PT ALSINAR INDO ABADI",
    hero_subtitle:"General Supplier & Contractor Terpercaya",
    hero_cta:"Hubungi Kami",
    services_title:"Layanan Kami",
    service_1:"General Supplier",
    service_2:"Kontraktor & Konstruksi",
    service_3:"Scrap Iron Management",
    service_4:"Catering Industri",
    about_title:"Tentang Perusahaan",
    about_text:"PT Alsinar Indo Abadi berkomitmen memberikan layanan profesional dan berkelanjutan.",
    contact_title:"Kontak Kami",
    contact_text:"Siap menjadi mitra strategis bisnis Anda."
  },
  en:{
    nav_home:"Home",
    nav_services:"Services",
    nav_about:"About",
    nav_contact:"Contact",
    hero_title:"PT ALSINAR INDO ABADI",
    hero_subtitle:"Trusted General Supplier & Contractor",
    hero_cta:"Contact Us",
    services_title:"Our Services",
    service_1:"General Supplier",
    service_2:"Contractor & Construction",
    service_3:"Scrap Iron Management",
    service_4:"Industrial Catering",
    about_title:"About Company",
    about_text:"PT Alsinar Indo Abadi is committed to providing professional and sustainable services.",
    contact_title:"Contact Us",
    contact_text:"Ready to become your strategic business partner."
  }
};

document.getElementById("langSwitch").onchange=e=>{
  const lang=e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent=texts[lang][el.dataset.i18n];
  });
};
