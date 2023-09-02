const seaCont = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("btn-icon");

serShow.addEventListener("click", () => {
  seaCont.style.padding = "5px 5%";
  seaCont.style.height = "50px";
  seaCont.style.transition = "all 0.5s";
});

serHide.addEventListener("click", () => {
  seaCont.style.height = "0";
  seaCont.style.padding = "0 5%";
})


// =============Navbar Hide and Show==============

const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
})


// =============submenu====================

const droptog = document.querySelectorAll(".drop-toggle");
const submenu = document.getElementsByClassName("submenu");

for (let x = 0; x < droptog.length; x++) {
  droptog[x].addEventListener("click", () => {
    submenu[x].classList.toggle("sub-menushow");
  });
}

// ============sub=sub=dropdown=================

const subsubtog = document.querySelectorAll(".sub-sub-drop");
const subSubMenu = document.getElementsByClassName("sub-sub-menu");


for (let y = 0; y < subsubtog.length; y++) {
  subsubtog[y].addEventListener("click", () => {
    subSubMenu[y].classList.toggle("show-sub-sub-menu");
  })
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}

