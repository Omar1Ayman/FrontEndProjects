let input = document.querySelector("input[type='text']"),
    btn = document.querySelector("input[type='button']");
    container = document.querySelector(".container");

btn.addEventListener("click" , function(){
    if(input.value !== ""){
        text = input.value
        textinverse = input.value.split("").reverse().join("")
        if(textinverse === text){
            let p = document.createElement("p")
            let span = document.createElement("span")
            span.textContent = text
            span.style.color = "blue"
            p.classList.add("info")
            txt= "Yes, the "
            p.appendChild(document.createTextNode(txt))
            p.appendChild(span)
             txt = " text is Palindrome"
            p.appendChild(document.createTextNode(txt))
            container.appendChild(p)
            setTimeout(function rm(){
                        p.remove()
                    } , 5000)

        }else{
            let p = document.createElement("p")
            let span = document.createElement("span")
            span.textContent = text
            span.style.color = "blue"
            p.classList.add("info")
            txt= "No, the "
            p.appendChild(document.createTextNode(txt))
            p.appendChild(span)
             txt = " text is not Palindrome"
            p.appendChild(document.createTextNode(txt))
            container.appendChild(p)
            setTimeout(function rm(){
                        p.remove()
                    } , 5000)

        }

        input.value = ""

    }
    
})

