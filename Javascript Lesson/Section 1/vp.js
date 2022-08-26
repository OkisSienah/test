let errPar

function purchase() {
    errPar = document.getElementById("error")
    console.log("btn was clicked")
    errPar.textContent = "Something went wrong, Please try again later!"
}
