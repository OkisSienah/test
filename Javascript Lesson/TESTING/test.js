/* FLIP COLOR */
const flipBtn = document.getElementById("flip-btn")

flipBtn.addEventListener("click", function flipColor() {
    document.body.style.backgroundColor = 'grey'
})

/* GENERATE QUOTES */
const quoteBtn = document.getElementById("quote-btn")
let quotes = ["Hello", "Hi", "Nice Try", "Keep Moving", "Never Give Up", "Almost There"]
let quotesLength = quotes.length
let text = document.getElementById("text")

quoteBtn.addEventListener("click", function GenerateQuote() {
    for(let i=0; i<quotes.length; i++) {
        text.textContent = quotes[Math.floor(Math.random()*quotesLength)]
    }
})

/* PASS THE MESSAGE */
const inputMessage = document.getElementById("input-message")
const submitBtn = document.getElementById("submit-btn")
const message = document.getElementById("message")

submitBtn.addEventListener("click", function Submit() {
    message.textContent = inputMessage.value
})

/* BACKGROUND IMAGE SLIDER  */
const button = document.querySelectorAll(".btn")
const imgBox = document.getElementById("img-box")
let count = 0
let id = ["img1", "img2", "img3"]
const images = [
    "images/blue-light.jpg",
    "images/blue-program.jpg",
    "images/shadow-moon.jpg"
]

button.addEventListener("click", function Slider() {
    if (button.classList.contains('btn-left')){
        count--
        if(count < 0){
          count = images.length -1
        }
        imageDIV.style.backgroundImage = `<img id="${id[i]}" src="${images[i]}")`
      }
      if (button.classList.contains('btn-right')){
        count++
        if(count > images.length -1){
          count = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${images[count]}.jpg')`
      }
})

Slider()