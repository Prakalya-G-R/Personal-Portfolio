const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".menu-close");

toggle.addEventListener("click", () => {

    menu.classList.add("active");
    toggle.style.display = "none";

});

closeBtn.addEventListener("click", () => {

    menu.classList.remove("active");
    toggle.style.display = "flex";

});


const btn = document.getElementById("viewmorebtn");
const cards = document.querySelectorAll(".projsmc");

let visiblecards=3;
if(cards.length<=3){
    btn.style.display="none";
}

btn.addEventListener("click", () =>{
    if(visiblecards>=cards.length){
        visiblecards=3;
        cards.forEach((cards,index) =>{
            if(index>=3){
                cards.style.display = "none";
            }
        });
        btn.innerHTML = 'View More <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>';
    }

    else{
        visiblecards+=3;
        
        cards.forEach((cards, index) =>{
            if(index<visiblecards){
                cards.style.display = "flex";
            }
        });
        if(visiblecards>=cards.length){
            btn.innerHTML = 'Show Less <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>';
        }
    }
});


const certbtn=document.getElementById("viewmorecert");
const certcards=document.querySelectorAll(".certsmcard");
let visiblecard=6;
if(certcards.length<=6){
    certbtn.style.display="none";
}
certcards.forEach((cert, index) => {
    if(index >= 6){
        cert.style.display = "none";
    }
});
let expanded=false;

certbtn.addEventListener("click",()=>{
    expanded=!expanded;
    certcards.forEach((certs,index)=>{
        if(index>=6){
            certs.style.display=expanded?"flex":"none";
        }
    });
    certbtn.innerHTML=expanded?'Show Less <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>':'View More <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>';
});