import"./style.scss";
import 'roboto-fontface';



function burgerMenu(){
   document.querySelector(".burger").addEventListener("click", function(){
      document.querySelector(".top-menu").classList.toggle("show");
   })
}

function menuActiveItem(){
   const menuItems = document.querySelectorAll(".top-menu_item");
   menuItems.forEach(item => item.addEventListener("click", function(){
      document.querySelector(".active").classList.remove("active");
      item.classList.add("active");
   }));
}

// scroll menu

function scrollMenu(){
   const anchors = document.querySelectorAll('a[href*="#"]:not([href="#"]');
   let animationTime = 300;
   let framesCount = 20;
   anchors.forEach(item => {
   item.addEventListener('click', function(e) {
   e.preventDefault();
   let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
   let scroller = setInterval(function() {
   let scrollBy = coordY / framesCount;
   if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
   window.scrollBy(0, scrollBy);
   } else {
   window.scrollTo(0, coordY);
   clearInterval(scroller);
   }
   }, animationTime / framesCount);
   });
   });
}

// go to top
let scrollButton = document.querySelector(".scroll_top");

function goToTop(){
   window.addEventListener("scroll", trackScroll);
   scrollButton.addEventListener("click", goUp);
}

function trackScroll() {
   let scrolled = window.scrollY + 200;
   let y = document.documentElement.clientHeight;

   if (scrolled > y) {
      scrollButton.classList.add("show");
   } else {
      scrollButton.classList.remove("show");
   }
}

function goUp() {
   if (window.pageYOffset > 0) {
     window.scrollBy(0, -80);
     setTimeout(goUp, 0);
   };
   document.querySelector(".active").classList.remove("active");
   document.querySelector('a[href="#home"]').parentNode.classList.add("active");
}


menuActiveItem()
burgerMenu()
scrollMenu()
goToTop()