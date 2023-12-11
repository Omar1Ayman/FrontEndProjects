/*jshint -W054 */


/**
 * Rgular Expression
 */
// let emals = 'Https://www.google.com Http://www.google.com Https://google.com Http://google.com google.org'
// emalRe = /(https?:\/\/)?(www.)?\w+.(com|org)/ig
// console.log(emals.match(emalRe))


// names = ['omar','aymna','rezk','eldesoky']
// for (var i of names){
//     console.log(i)
// }
// var i = 0
// // while (i <= 10){
// //     console.log(i)
// //     i++
// // }

// do{
//     i++
//     console.log(i)
    
// }while(i < 10)



// new Vue({
//     el: "#app",
//     data:{
//              api:[
//             {name:"omar", age:22 , address:"elmahala" ,phone: "0102784288" },
//             {name:"mohab", age:22 , address:"elmahala" ,phone: "0102784275" },
//             {name:"mena", age:22 , address:"ado ali" ,phone: "0102784274" },
//             {name:"maryam", age:22 , address:"met ghamer" ,phone: "0102784273" },
//             {name:"maryam", age:22 , address:"tanta" ,phone: "0102784272" },

//         ],
//         obj : {name:"omar", age:22 , address:"elmahala" ,phone: "0102784288" },
//         count:0,
//         select: '',
//     },
//     methods :{

//        myFunction(){
//         var myCheck = document.getElementById("myCheck")
//         var d_all = document.getElementById("d_all")
//         if(myCheck.checked == true){
//           d_all.style.display = "block"
//         }else{
//           d_all.style.display = "none"
//         }
//       },//end myFunction


      
//     }//end methods
// })

//  api = [
//    {fname:"omar",lname:"elbasuony" , age:21 , id:"100140733"},
//    {fname:"ahmed",lname:"elbasuony" , age:24 , id:"14025515"},
//    {fname:"tarek",lname:"elbasuony" , age:23 , id:"15487165"},
//    {fname:"mohammed",lname:"elbasuony" , age:18 , id:"1658710"},
//  ]



var test = document.querySelector(".test")
lis = document.querySelectorAll("ul li")

if(window.localStorage.getItem("color")){
    test.style.background = window.localStorage.getItem("color")
     document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).style.background = window.localStorage.getItem("color")

    lis.forEach(function(el){

      el.classList.remove("active")


    })
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")


}else{
console.log("no")
}

lis.forEach(function(el){
  el.onclick = function(){

    lis.forEach(function(el){

      el.classList.remove("active")
      el.style.background = ""

    })
    this.classList.add("active")

    

    window.localStorage.color = this.getAttribute("data-color")
    this.style.background = this.getAttribute("data-color")
    var color = window.localStorage.color
    test.style.cssText = "background:" + color
  }
});



// var data = [
//   {name: 'daniel', age: 45},
//   {name: 'john', age: 34},
//   {name: 'robert', age: null},
//   {name: 'jen', age: undefined},
//   {name: null, age: undefined}
// ];

// var dataMod = data.filter(function(el){
//   if(el.name != undefined && el.age != undefined ){
//     return true
//   }else{
//     return false
//   }
// })



// let info = {
//   fname : "omar",
//   lname: "ayman",
//   age : 22,
//   address : "elmahale",
//   getdata:function(){
//     console.log(`${this.fname} ${this.lname} and your age is ${this.age}`);
//   } 

// }

// console.log(info);







// for(let i=1; i<=20;i++){
//   // Create Elements
// parent = document.createElement("div");
// h3 = document.createElement("h3");
// p = document.createElement("p");

// //create Text
// h_tet = document.createTextNode(`Produc ${i}`)
// p_tet = document.createTextNode("Text From Js DM in P")



// parent.setAttribute("class" , "product")
// parent.appendChild(h3)
// parent.appendChild(p)

// h3.appendChild(h_tet)
// p.appendChild(p_tet)

// document.body.appendChild(parent)

// }





var div = document.createElement("div");
var span = document.createElement("span");
var up = document.createElement("span");
div.appendChild(up)
div.style.cssText = "transition:all 2s;position: fixed;display:none;right: 20px;bottom: 100px;"
up.textContent = "UP"
up.style.cssText = "padding:15px;font-size:30px;background:blue;color:yellow;border-radius:50%; text-align:center;cursor:pointer"

window.addEventListener("scroll" , function(){
    div.appendChild(span)
    console.log(this.window.scrollY)
    if(this.window.scrollY >= 500){
        div.style.display = "block"
    }else{
        div.style.display = 'none'
    }
})

up.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
}
document.body.appendChild(div);
///local storage

var form = document.querySelectorAll(".form input"),
    cont = document.querySelector('.content'),
    input_text = form[0],
    input_submit = form[1];



input_submit.addEventListener("click" , function(){
    var text = input_text.value
    if(text.length > 0){
         var all = document.createElement('div'),
             add_div = document.createElement('div'),
             delete_btn = document.createElement("button");
             text = document.createTextNode(text);
         all.appendChild(add_div)
         all.appendChild(delete_btn)
         add_div.appendChild(text)
         cont.appendChild(all)

         all.style.cssText = "border-radius: 4px;display:flex;display: flex;justify-content: space-between;flex-direction: row; margin-bottom:5px;background:white"
         add_div.style.cssText = "background:white;color:black;padding:5px;width:50%;border-radius: 4px;font-weight:bold;font-size:20px"
         delete_btn.textContent = "Delete"
         delete_btn.style.cssText = "background:red;color:white;border-radius: 4px;border:none;cursor:pointer"
         delete_btn.classList.add("btn-delete")
         window.localStorage.setItem("content" , all)
        input_text.value = ""
        input_text.focus()
         
    }


    
    document.querySelectorAll('.btn-delete').forEach(function(el){
        el.addEventListener("click" , function(){
           this.parentElement.style.display = 'none';
        })
    })
})

   









var date = new Date()
var day = date.getDay()
switch(day){
    case 0 :
        day = "Sunday"
        break;
    case 1 :
        day = "Monday"
        break;
    case 2 :
        day = "Tuesday"
        break;
    case 3 :
        day = "Wednesday"
        break;
    case 4 :
        day = "Thursday"
        break;
    case 5 :
        day = "Friday"
        break;
    case 6 :
        day = "Saturday"
        break;
}
var timer = document.querySelector(".timer").innerHTML
var su = setInterval(function(){
    
     document.querySelector(".timer").innerHTML = new Date().toLocaleString() +"<br>" + day
     
} , 1000)






