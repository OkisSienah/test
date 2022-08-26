/* OBJECT AND FUNCTION */

let message = document.getElementById("message")
let keys = {
    name: "Budi",
    age: 20,
    country: "Indonesia",
}

function logData() {
    console.log(keys.name + " is " + keys.age + " years old and lives in " + keys.country)
}

logData()


/* IF ELSE */

let age = 17

if(age < 6) {
    console.log("Free")
}else if(age <= 17) {
    console.log("Child Discount")
}else if(age <= 26) {
    console.log("Student Discount")
}else if(age <= 66) {
    console.log("Full Price")
}else {
    console.log("Senior Citizen Discount")
}

/* LOOPS AND ARRAYS */

let LargeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]


function countries() {
    for(let i=0; i<LargeCountries.length; i++){
        console.log(i+1 + ". " + LargeCountries[i])
    }
}

countries()

/* PUSH POP SHIFT UNSHIFT*/

let LC = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

LC.pop()
LC.push("Pakistan")
LC.shift()
LC.unshift("China")
console.log(LC)


/* LOGICAL OPERATORS */

let day = 13
let weekday = "Friday"

if(weekday === "Friday" && day === 13) {
    console.log("spooky face")
}else {
    console.log("Normal Day")
}

/* ROCK PAPER SCISSOR */


function randomP1() {console.log(p1[random])}
function randomP2() {console.log(p2[random])}

function rps() {
    let p1 = ["rock", "paper", "scissor"]
    let p2 = ["paper", "rock", "scissor"]
    let rand = Math.floor(Math.random() * 3)
    let Random = {
        P1: p1[rand],
        P2: p2[rand]
    }

    if(Random.P1 === "rock" && Random.P2 === "scissor") {
        console.log("P1 WIN")
    } else if(Random.P1 === "rock" && Random.P2 === "paper") {
        console.log("P2 WIN")
    } else if(Random.P1 === "rock" && Random.P2 === "rock") {
        console.log("DRAW")
    } else if(Random.P1 === "paper" && Random.P2 === "rock") {
        console.log("P1 WIN")
    } else if(Random.P1 === "paper" && Random.P2 === "scissor") {
        console.log("P2 WIN")
    } else if(Random.P1 === "paper" && Random.P2 === "paper") {
        console.log("DRAW")
    } else if(Random.P1 === "scissor" && Random.P2 === "paper") {
        console.log("P1 WIN")
    } else if(Random.P1 === "scissor" && Random.P2 === "rock") {
        console.log("P2 WIN")
    } else if(Random.P1 === "scissor" && Random.P2 === "scissor") {
        console.log("DRAW")
    } else {
        console.log("INVALID INPUT")
    }
    console.log("")
    console.log("RPS LOG")

    console.log("   P1" + " " + Random.P1)
    console.log("   P2" + " " + Random.P2)
}

console.log("")
rps()

/* SORTING FRUITS */

let fruits
let appleShelf
let orangeShelf

function sortFruit() {
    fruits = ["apple", "orange", "apple", "orange", "orange"]
    appleShelf = document.getElementById("apple-shelf")
    orangeShelf = document.getElementById("orange-shelf")

    for(let i=0; i<fruits.length; i++) {
        if(fruits[i] === "apple") {
            appleShelf.textContent += " apple"
        } else if(fruits[i] === "orange") {
            orangeShelf.textContent += " orange"
        }
    }
}
sortFruit()

