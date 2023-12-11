
// Tabs
const tabs = document.querySelectorAll(".tabs ul li");
const divs = document.querySelectorAll(".content div");
tabs.forEach(elm => {
    elm.addEventListener("click", (e) => {
        tabs.forEach(ele => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        divs.forEach(div => {
            div.style.display = "none"
        })
        // console.log();
        document.querySelector(`.${e.currentTarget.dataset.cont}`).style.display = "block"

    })
})


const fact = document.getElementById("result");
const btnFactNums = document.getElementById("btn-fact-nums")
const btnRandNums = document.getElementById("btn-rand-num")
const url = "http://numbersapi.com/"

let h1 = document.querySelector("h2")
let myText = "Get Fact Number";
let index = 1;

function WriteText() {

    h1.textContent = myText.slice(0, index);
    index++
    if(index > myText.length){
        index = 1;
    }
}



let FetchNumber = (num) => {
    let realUrl = url + num
    fetch(realUrl).then(res => res.text())
        .then(data => {
            fact.innerHTML =
            `
            <h1>${num}</h1>
            <p>
            ${data}
            </p>
            `
            
    })
}
btnFactNums.addEventListener("click", () => {
    let number = document.getElementById("num").value.trim();
    if (number) {
        if (number >= 0 && number <= 300) {
            FetchNumber(number)
            number = ' '
        } else {
            fact.style.display = 'block'
            fact.innerHTML = `
            <p class="msg">sorry, you have inter number between 0-300</p>
            `
            number = ' '
        }
        
    } else {
        fact.style.display = 'block'
        fact.innerHTML = `
        <p class="wrong-msg">sorry, input can not be empty</p>
        `
    }
})

let GetRandFact = () => {
    
    let randnumber = Math.floor(Math.random() * 301)
    FetchNumber(randnumber)
}
btnRandNums.addEventListener("click", GetRandFact)
window.addEventListener("load" , GetRandFact)


// SCROLL TOP
const upbtn = document.querySelector(".up");
window.addEventListener("scroll", function () {
    this.scrollY >= 300  ? upbtn.classList.add("show") : upbtn.classList.remove("show")
})

upbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
     })
})


window.onload(setInterval(WriteText, 500))

