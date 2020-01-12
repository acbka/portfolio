import "./style.scss";
import 'roboto-fontface';

function start(){ 
   let item = document.querySelector(".active").childNodes[0]; 
   scrollMenu(item);
}

// burger

function burgerMenu() {
   document.querySelector(".burger").addEventListener("click", function () {
      document.querySelector(".top-menu").classList.toggle("show");
      this.classList.toggle("burger-cross");
   })
}

// active menu item

let menuItems = Array.from(document.querySelectorAll(".item"));

let anchors = menuItems.map(el => { 
   let hash = el.href.replace(/[^#]*(.*)/, '$1'); 
   return hash;
})

let sections = anchors.map(hash => {
   let block = document.querySelector(hash);
   return block ;
})

let menuHeight = document.querySelector(".top-menu").offsetHeight;
let V = .1;

function activeMenuItem() {
   menuItems.forEach(elem => {
      elem.addEventListener('click', function (e) {
         e.preventDefault();
         scrollMenu(elem); 
         
         menuItems.forEach((nl) => {
            if (nl != this) {
               nl.parentNode.classList.remove('active');
            }
         });

         this.parentNode.classList.add('active');
        document.querySelector(".top-menu").classList.toggle("show");
        document.querySelector(".burger").classList.remove("burger-cross");
      }, false);
   });
}

// scroll menu

   function scrollMenu(item) { 
      let w = window.pageYOffset;
      let hash = item.href.replace(/[^#]*(.*)/, '$1'); 
      let t = document.querySelector(hash).getBoundingClientRect().top; 

      let start = null;
   
      requestAnimationFrame(step);
   
      function step(time) {
         let menuHeight = document.querySelector(".top-menu").offsetHeight;

         if (start === null) start = time;

         let progress = time - start;
         let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
         window.scrollTo(0, r); 

         if (r != w + t) {
            requestAnimationFrame(step)
         } else { 
            //window.scrollTo(0, t + w - menuHeight) // if menu is fixed
            location.hash = hash // -  URL с хэшем если меню не fixed
         }
      };
   }
   
// scroll page

function scrollPage(){
   let menuItems = Array.from(document.querySelectorAll(".item"));
   window.addEventListener('scroll', activeBlock);

   function activeBlock(){
      sections.forEach(item => {
         let start = item.offsetTop - menuHeight;
         let end = item.offsetTop + item.offsetHeight/1.3;

         if (pageYOffset > start && pageYOffset < end){
            document.querySelector(".active").classList.remove("active");
            let index = sections.indexOf(item);
            menuItems[index].parentNode.classList.add("active");
         }
      })
   }
}     

// go to top

let scrollButton = document.querySelector(".scroll_top");

function goToTop() {
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

// portfolio

function portfolio(){
   let links = document.querySelectorAll(".side-menu_item");
   //let allPict = document.querySelectorAll(".all");
   let linkName = null;
   let oldLinkName = null;
   links.forEach(link => {
      link.addEventListener("click", function(){
         linkName = "." + link.dataset.item; // get value from data-item 

         if (linkName != oldLinkName) {
            hideOldElements().then(removeOldElements).then(showCurrentElements);
            oldLinkName = linkName;
         }
      })   
   })
   
   async function hideOldElements(){
      let shownElements = document.querySelectorAll(".visible"); 
      shownElements.forEach(elem => {
         elem.classList.add("hidden");
      }); 
   }

   async function removeOldElements(){
      let shownElements = document.querySelectorAll(".visible"); 
      shownElements.forEach(elem => {
         elem.classList.remove("visible");
         elem.classList.add("none");
         elem.classList.remove("hidden"); 
      })
      
   }; 

   function showCurrentElements(){
      let elements = Array.from(document.querySelectorAll(linkName));

      elements.forEach(elem => {
         elem.classList.remove("none"); 
         elem.classList.add("visible"); 
      })
   }

}

//start()
activeMenuItem()
burgerMenu()
scrollPage()
goToTop()
portfolio()


