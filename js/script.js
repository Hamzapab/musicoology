// humberger nav menu toggle
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

function showandHideNav(){
  hamburger.firstElementChild.classList.toggle("not-checked");
  hamburger.firstElementChild.classList.toggle("checked");
}
hamburger.addEventListener("click",()=>{
  showandHideNav();
  if(hamburger.firstElementChild.classList.contains("checked")){
    nav.style.width = "70%";
    document.body.style.cssText = "overflow:hidden;"
  }else{
    nav.style.width ="0";
    document.body.style.cssText = "overflow:auto;"
  }
})

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".target");
  if (!isClosest && hamburger.firstElementChild.classList.contains("checked")) {
    showandHideNav();
    nav.style.width ="0";
    document.body.style.cssText = "overflow:auto;"
    }
  });

// Statistics section

let statistics = document.querySelector(".our-statistique");
let boxDiv = document.querySelectorAll(".statis-box div span");
let started = false; // Function Started ? No


window.addEventListener("scroll",()=>{
  if(window.scrollY >= statistics.offsetTop - 280){
    if(!started){
      boxDiv.forEach((box)=>{
        startCount(box)
      })
    }
    started = true;
  }
})
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent = +el.textContent + 4;
    if (+el.textContent == +goal) {
      el.textContent = el.textContent + "+"
      clearInterval(count);
    }
  }, 500 / goal);
}
