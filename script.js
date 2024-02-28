function toggleMenu(){
    const menu=document.querySelector(".menu-links")
    const hamburger_icon=document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    hamburger_icon.classList.toggle("open")
}