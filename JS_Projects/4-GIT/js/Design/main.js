
document.body.style.cssText = "padding:0;margin:0"
//Make Header
// Make Elements
    // Header Elements
var header    = document.createElement("header"),
    container = document.createElement("div"),
    div_logo  = document.createElement("div"),
    h_logo    = document.createElement("h2"),
    span1     = document.createElement("span"),
    span2     = document.createElement("span"),
    links     = document.createElement("div"),
    ul_links  = document.createElement("ul");
    footer    = document.createElement("footer")


    //append elements in header
    
    header.appendChild(div_logo)
    header.appendChild(links)

    div_logo.appendChild(h_logo)
    h_logo.appendChild(span1)
    h_logo.appendChild(span2)
    div_logo.className = "logo"
    span1.textContent = "Lo"
    span2.textContent = "Go"

    
    
    links.appendChild(ul_links)
    links.className = 'links'
    arr_links = ['Home' , 'Taxeonomy' ,'About Us' , 'Contact Us']

    for(let i=0;i <arr_links.length; i++){
        li = document.createElement('li')
        li.style.cssText = "padding:10px; margin:0 5px 0 5px; "
        text = document.createTextNode(arr_links[i]);
        ul_links.appendChild(li)
        li.appendChild(text)
        
    }

    // Header Style
    header.style.cssText = "display :flex; justify-content: space-around; background:#333; color:white "

    //logo style
    h_logo.style.cssText = "letter-spacing: 2px;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
    span1.style.cssText = "color:rgb(0, 253, 16)"
    span2.style.cssText = "color:white"


    div_logo.addEventListener('click' ,function(){
        h_logo.style.visibility = "hidden"
    })
    div_logo.addEventListener('mouseover' , function(){
        span1.style.cssText = "color:white"
        span2.style.cssText = "color:rgb(0, 253, 16)"
    })

    div_logo.addEventListener('mouseout' , function(){
        span1.style.cssText = "color:rgb(0, 253, 16)"
        span2.style.cssText = "color:white"
    })


    //links Style 
    links.style.cssText = "display:flex; align-items: center;"
    ul_links.style.cssText = "list-style: none; padding:0;margin:0;display:flex;"
    first_link = ul_links.children[0]
    let style = "text-transform: uppercase;padding:10px; margin:0 5px 0 5px;letter-spacing: 3px;"
    let active = style + "color:#333;background-color:rgb(0, 253, 16);"
    lis = ul_links.childNodes;


    
    //add class active
    first_link.classList.add("active")
    
    lis.forEach(function(el){
       
        el.style.cssText = style
        el.onclick = function(){
            lis.forEach(function(el){
            el.classList.remove("active")
            el.style.cssText = style
        })
        this.classList.add("active")
        if(el.getAttribute("class") === "active"){
            el.style.cssText = active
        }
        }
    first_link.style.cssText = active

    })
//finish heade

//make content

    var content = document.createElement("div"),
        container_cont = document.createElement("div")

    container_cont.className = "container"
    container_cont.style.cssText = "width:85%;padding:0 15px 0 15px; margin:auto"
    container_cont.appendChild(content)
    content.style.cssText = "display: grid;grid-template-columns: auto auto auto;gap: 10px;padding: 10px;"


    for(let j=0;j<18;j++){
        children = document.createElement("div")
        content.appendChild(children)
        children.textContent = "Product "+j
        children.style.cssText = "background-color: rgb(255, 200, 255);text-align: center;padding: 30px ;font-size: 30px;"
  
  
      }

//make footer
      footer_cont = document.createElement("div")
      p = document.createElement("p")
      container.style.cssText = "width:85%;padding:0 15px 0 15px; margin:auto"
      container.className = "container"
      footer.appendChild(container)
      container.appendChild(footer_cont)
      footer_cont.appendChild(p)
      p.innerHTML = "Coby Right <br>omar aymna sincy 20"


      footer.style.cssText = "background:#333;color:yellow;font-size:25px;"
      footer_cont.style.cssText = "text-align:center;padding:10px"

      

    



document.body.appendChild(header)
document.body.appendChild(container_cont)
document.body.appendChild(footer)





