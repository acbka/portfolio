import"./style.scss";
import 'roboto-fontface';



function burgerMenu(){
   document.querySelector(".burger").addEventListener("click", function(){
      document.querySelector(".top-menu").classList.toggle("show");
   })
}

burgerMenu()