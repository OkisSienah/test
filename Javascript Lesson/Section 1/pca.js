let countEl
let count = 0
let saveEl

function increment() {
    countEl = document.getElementById("count-el")
    count += 1
    countEl.textContent = count
}

function decrement() {
    countEl = document.getElementById("count-el")
    count -= 1
    countEl.textContent = count
}

function save() {
    saveEl = document.getElementById("save-el")
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}