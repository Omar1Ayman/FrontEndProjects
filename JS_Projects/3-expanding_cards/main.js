
const panels = document.querySelectorAll(".panel")

panels.forEach((el) => {
    el.addEventListener("click", () => {
        removeactive()
        el.classList.add("active")
    })
})


function removeactive() {
    panels.forEach(p => {
        p.classList.remove("active")
    })
}