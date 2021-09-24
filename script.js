// Magic 8 ball by Will C

// variables to store html elements
let quesInEl = document.getElementById("questionIn")
let ballInEl = document.getElementById("8Ball")
let answerOutEl = document.getElementById("answer")

// Event listener
document.getElementById("8Ball").addEventListener("click", answer)

// Event Function
function answer() {
    // case insensitve
    quesInEl.value.toLowerCase();
    let randAns = Math.random();
    console.log(randAns)
    if (quesInEl.value.length === 0) {
        answerOutEl.innerHTML = "Please ask a question"
    } else if (quesInEl === "is javasript awesome?" || quesInEl === "is javascript awesome") {
        answerOutEl.innerHTML = "Of course it is!"
    } else if (randAns < 0.20) {
        answerOutEl.innerHTML = "Without a doubt."
    } else if (randAns < 0.40) {
        answerOutEl.innerHTML = "As I see it, yes."
    } else if (randAns < 0.60) {
        answerOutEl.innerHTML = "Concentrate and ask again."
    } else if (randAns < 0.80) {
        answerOutEl.innerHTML = "Don't count on it."
    } else {
        answerOutEl.innerHTML = "Outlook not so good."
    }
}