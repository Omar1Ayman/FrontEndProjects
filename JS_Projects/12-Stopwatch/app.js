const start = document.getElementById("start"),
    pause = document.getElementById("pause"),
    reset = document.getElementById("reset"),
    h1 = document.querySelector("h1");

let [millisecoonds, seconds, minutes, houres] = [0, 0, 0, 0]
let timerRef = document.querySelector(".watch");
let int;

start.addEventListener("click", () => {
    int = setInterval(displayTimer, 10)
})

pause.addEventListener("click" , ()=> {
    clearInterval(int)
})

reset.addEventListener("click", () => {
    clearInterval(int)
    timerRef.innerHTML = "00 : 00 : 00 : 000"
})

function displayTimer() {
    millisecoonds += 10
    if (millisecoonds == 1000) {
        millisecoonds = 0
        seconds++
        if (seconds == 60) {
            seconds = 0;
            minutes++
            if (minutes == 60) {
                minutes = 0;
                houres++
        }
    }
    }

    let h = houres < 10 ? "0" + houres : houres;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = millisecoonds < 10 ? "00" + millisecoonds :
    millisecoonds < 100 ? "0" + millisecoonds : millisecoonds;
    
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}

let index = 1
let text = "Stop Watch"
setInterval(function () {

    if (index > text.length) {
        index = 1
    }
    h1.innerHTML = text.slice(0, index)
    index++
} , 200)

