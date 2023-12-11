let title = document.getElementById("title"),
    myText = "Build a notes app",
    index = 1,
    add = document.querySelector(".add"),
    container = document.querySelector(".container"),
    close = document.querySelector(".head span");


// function Title() {
//     title.textContent = myText.slice(0, index)
//     index++
//     if (index > myText.length) {
//         index = 0
//     }
    
// }
// setInterval(Title, 200)


add.addEventListener("click", () => {
    document.body.style.background = "#618cf85e"
    container.style.cssText  = "display:block"
})

close.addEventListener("click", () => {
    document.body.style.background = "#88ABFF"
    container.style.cssText  = "display:none"
    
})






















