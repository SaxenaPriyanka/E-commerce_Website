const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
//querySelectorAll was used to select the array of all matching elements

menuItems.forEach((item, index) =>{
    item.addEventListener("click",()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`; //to change the slides
    });
});

document.querySelector('.clickable').addEventListener('click', function() {
  alert('FAQ page opens.');
});




