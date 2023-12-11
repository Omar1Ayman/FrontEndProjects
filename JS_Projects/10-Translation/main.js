const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const exchangeIcon = document.querySelector(".exchange");
const btn_translate = document.querySelector("button");
let h1 = document.querySelector("h1")
let myText = "Translation App";
let index = 1;


selectTag.forEach((tag , id) => {
    for (const country_cod in countries) {
        let selected;
        if (id == 0 && country_cod == "en-GB") {
            selected = "selected"
        } else if(id == 1 && country_cod == "ar-SA"){
            selected = "selected"
        }
        let option = `<option value="${country_cod}" ${selected}>${countries[country_cod]}</option>`;
        tag.insertAdjacentHTML("beforeend" , option)
    }
})

exchangeIcon.addEventListener("click", () => {
    tempText = fromText.value;
    templang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText
    selectTag[1].value = templang
})

btn_translate.addEventListener("click", () => {
    let text = fromText.value,
        transFrom = selectTag[0].value,
        transTo = selectTag[1].value;
    if (!text) return;
    toText.setAttribute("placeholder","Translating....")
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${transFrom}|${transTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder","Translation")


    });
})

icons.forEach(icon => {
    icon.addEventListener("click",({ target }) => {
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value)
            } else {
                navigator.clipboard.writeText(toText.value)

            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value)
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value)
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    })
})

function WriteText() {

    h1.textContent = myText.slice(0, index);
    index++
    if(index > myText.length){
        index = 0;
    }
}

window.onload(setInterval(WriteText , 300))