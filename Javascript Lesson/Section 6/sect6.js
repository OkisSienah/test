let myCourses = ["HTML", "CSS", "JS"]

function logItems(arr) {
    for(let i=0; i<arr.length; i++) {
        console.log(i+1 + ". " + arr[i])
    }
}

logItems(myCourses)

/* ADDEVENTLISTENER AND OBJECT IN ARRAY */
const janeBtn = document.getElementById("jane-btn")


let data = [{
    player: "Jane",
    score: 30
},
{
    player: "Scott",
    score: 20
}]

janeBtn.addEventListener("click", function() {
    console.log(data[0])
})

/* GENERATE SENTENCE */
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1
    for(let i=0; i<arr.length; i++) {
        if(i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ","
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

/* RENDER IMAGES */

const images = [
    "images/tree.jpg",
    "images/balloon.jpg",
    "images/shadow.jpg"
]

const id = ["tree", "balloon", "shadow"]

const container = document.getElementById("container")

function renderImages() {
    for(let i=0; i<images.length; i++) {
        container.innerHTML += `<img id="${id[i]}" src="${images[i]}">`
    }
}

renderImages()
