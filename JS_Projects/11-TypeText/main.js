let container  = document.createElement("div"),
    make_input = document.createElement("input"),
    make_span1 = document.createElement("span"),
    make_span2 = document.createElement("span"),
    myText = "Omar Elbasuony",
    input  = document.getElementById("text"),
    p      = document.getElementById("p"),
    index  = 1;

    container.classList.add("container")
    make_input.setAttribute("id","text")
    
    
function WriteText(){
    let existText = p.innerHTML;
    if(input.value.length == 0){
         p.textContent = myText.slice(0,index);
            index++
            if(index > myText.length){
                index = 0;
            }
    }else{
        p.textContent = input.value.slice(0,index);
         index++
        if(index > myText.length){
            index = 0;
        }
    }
   
}
setInterval(WriteText , 200)