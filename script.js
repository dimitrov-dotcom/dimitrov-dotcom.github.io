// NAVBAR SCROLL EFFECT
window.addEventListener("scroll",()=>{
  document.querySelector(".nav")
    .classList.toggle("scrolled", window.scrollY>50);
});

// MOBILE MENU
function toggleMenu(){
  const menu=document.getElementById("menu");
  menu.style.display = menu.style.display==="flex"?"none":"flex";
}
