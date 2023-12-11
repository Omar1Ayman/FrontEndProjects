const tabs = document.querySelectorAll("header .container nav ul li")
const divs = document.querySelectorAll(".content .container section")
const show = document.querySelector(".show-hide");
const pass = document.getElementById("password")

tabs.forEach(elm => {
    elm.addEventListener("click", function (e) {
        tabs.forEach(li => {
            li.classList.remove("active")
        })
        elm.classList.add("active")

        divs.forEach(div => {
            div.style.display = "none"
        })
        document.querySelector(`.${e.currentTarget.dataset.cont}`).style.display = "block"
    })
})

show.addEventListener("click", () => {
    if (pass.type == "password") {
        pass.type = "text"
        show.classList.remove("fa-lock")
        show.classList.add("fa-lock-open")
    } else {
        pass.type = "password"
        show.classList.remove("fa-lock-open")
        show.classList.add("fa-lock")

        
    }
} )
var apiKey = "d5c1e68a7fadbcbbaa1d82a081b2b351"
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityValue+"&units=metric&appid="+apiKey;
    //Clear the input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};




// Calculator
const screen = document.querySelector(".screen")
const btnClick = (e) => {
    screen.value += e.innerHTML
}
const cleaninput = () => {
    screen.value = ""
}

const Calc = () => {
    if (screen.value == "") {
        alert("you have to enter data")
    } else {
        screen.value = eval(screen.value)
    }
}

const neg_pos = () => {
    if (screen.value != "") {
        if (screen.value > 0) {
            screen.value = eval(screen.value * -1)
        } else {
            screen.value = eval(screen.value * -1)
        }
    } else {
        alert("no element")
    }
}

const del = () => {
    if (screen.value) {
        screen.value = screen.value.slice(0,screen.value.length - 1)
    }
}


// imageSlider
let prev = document.querySelector(".left"),
    next = document.querySelector(".right"),
    dots = document.querySelectorAll(".dot-container2 div"),
    slides = document.querySelectorAll(".img-container img"),
    slideIndex = 1;

    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
       dots.forEach(el => {
          el.classList.remove("active")
        })
       slides.forEach(el => {
            el.classList.remove("active")
        })
        
        slides[slideIndex-1].classList.add("active");  
        dots[slideIndex - 1].classList.add("active");

    }





















searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);