let saturate = document.getElementById("saturate"),
    contrast = document.getElementById("contrast"),
    sepia = document.getElementById("sepia"),
    brightness = document.getElementById("brightness"),
    grayscale = document.getElementById("grayscale"),
    blure = document.getElementById("blure"),
    hueRotate = document.getElementById("hue-rotate"),

    upload = document.getElementById("upload")
    download = document.getElementById("download")
    img = document.getElementById("img")
    reset = document.querySelector("span")
    imgBox = document.querySelector(".img-box");


function ResetValue() {
    img.style.filter = "none"
    saturate.value = "100"
    contrast.value = "100"
    brightness.value = "100"
    sepia.value = "0"
    grayscale.value = "0"
    blure.value = "0"
    hueRotate.value = "0"
}

window.onload = function () {
    download.style.display = "none"
    reset.style.display = "none"
    imgBox.style.display = "none"
}

upload.onchange = function () {
    ResetValue()
    download.style.display = "block"
    reset.style.display = "block"
    imgBox.style.display = "block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result
    }
}

let filters = document.querySelectorAll("ul li input")
filters.forEach(filter => {
    filter.addEventListener("input", function () {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            sepia(${sepia.value}%)
            brightness(${brightness.value}%)
            grayscale(${grayscale.value})
            blur(${blure.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
    })
})

download.onclick = function () {
    download.href=img.src 
}