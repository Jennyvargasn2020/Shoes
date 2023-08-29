const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")
const carouselItemWrapper = document.querySelector(".carousel-item-wrapper")
const carouselItems = document.querySelectorAll(".carousel-item")

slideLeft.addEventListener("click", e => {
  console.log(carouselItemWrapper.scrollLeft)
  carouselItemWrapper.scrollLeft -= carouselItems[0].width
})
slideRight.addEventListener("click", e => {
  console.log(carouselItemWrapper.scrollLeft)
  carouselItemWrapper.scrollLeft += carouselItems[0].width
})

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', ()=> {
    containerCartProducts.classList.toggle
    ('hidden-cart')
        
}


)

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
