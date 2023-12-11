let clicked = document.querySelectorAll(".container .section"),
    data = document.querySelectorAll(".data"); 

clicked.forEach((el, ind) => {
   
    el.addEventListener("click", () => {
        // data[ind].classList.toggle("active")
      
        d = el.nextElementSibling;
        if (d.style.maxHeight) {
            d.style.maxHeight = null
            el.children[1].textContent = "+"
        } else {
            d.style.maxHeight = d.scrollHeight+ "px"
            el.children[1].textContent = "-"
        }

      

        


    })
})