//Create Element 
let del_not = document.createElement("span"),
    edit_not = document.createElement("span"),
    del_btn = document.querySelector(".del"),
    add_btn = document.querySelector(".add"),
    edit_btn = document.querySelector(".edit"),
    index = 1;

add_btn.addEventListener("click" , function(){
    let add_not = document.createElement("div")
    add_not.classList.add("not_add")
    add_not.textContent = "Added !" + index;
    add_not.style.cssText = "transition: all .4s ease-in-out;width:100%;background-color: rgb(82, 137, 209) ;border-radius:10px;padding:10px;border-bottom:1px solid #aaa"
    index++;
    document.querySelector('.add_not').appendChild(add_not);

    setTimeout(function(){
    add_not.remove();
} ,3000)
})

edit_btn.addEventListener("click" , function(){
    let add_not = document.createElement("div")
    add_not.classList.add("not_add")
    add_not.textContent = "Updated !" + index;
    add_not.style.cssText = "transition: all .4s ease-in-out;width:100%;background-color: rgb(82, 137, 209) ;border-radius:10px;padding:10px;border-bottom:1px solid #aaa"
    index++;
    document.querySelector('.add_not').appendChild(add_not);

    setTimeout(function(){
    add_not.remove();
} ,3000)
})


del_btn.addEventListener("click" , function(){
    let add_not = document.createElement("div")
    add_not.classList.add("not_add")
    add_not.textContent = "Deleted !" + index;
    add_not.style.cssText = "transition: all .4s ease-in-out;width:100%;background-color: red ;border-radius:10px;padding:10px;border-bottom:1px solid #aaa"
    index++;
    document.querySelector('.add_not').appendChild(add_not);

    setTimeout(function(){
    add_not.remove();
} ,3000)
})


