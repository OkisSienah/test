/* CHROME EXTENSIONS */

let myInput = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const linkInput = document.getElementById("list-input")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("save-tab-btn")
const inputFromLocalStorage = JSON.parse(localStorage.getItem("myInput"))

if(inputFromLocalStorage) {
    myInput = inputFromLocalStorage
    render(myInput)
}


inputBtn.addEventListener("click", function saveInput() {
    myInput.push(inputEl.value)
    clearInput()
    localStorage.setItem("myInput", JSON.stringify(myInput))
    render(myInput)

    console.log(localStorage.getItem("myInput"))
})

const tab = {url: "https://www.google.com"}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myInput.push(tab[0].url)
        localStorage.setItem("myInput", JSON.stringify(myInput))
        render(input)
    })
})

delBtn.addEventListener("dblclick", function deleteBtn() {
    localStorage.clear()
    myInput = []
    render(myInput)
})

function clearInput() {
    inputEl.value = ""
}

function render(input) {
    let listItems = ""
    for(let i=0; i<input.length; i++) { 
        listItems += `
        <li>
            <a target='_blank' href=' ${input[i]} '> ${input[i]} </a>
        </li>
        `
    }

    linkInput.innerHTML = listItems
}
/* FIRST CHROME EXTENSIONS */

const box = document.getElementById("box")

box.addEventListener("click", function() {
    box.textContent = "The box is opened!"
})


/* FIRST INNER HTML */

const container = document.getElementById("container")

container.innerHTML = "<button id=buy-button>Buy!</button>"

/* TEMPLATE STRING */
let name = "Jack"
let hobby = "sleep"

const tstring = `Hello World my name is ${name}
My hobby is ${hobby}
`

console.log(tstring)

