// Magic 8 ball by Will C

// variables to store html elements
let quesInEl = document.getElementById("questionIn")
let ballInEl = document.getElementById("8Ball")
let answerOutEl = document.getElementById("answer")


// Event listener
ballInEl.addEventListener("click", answer);

// Event Function
function answer() {
    // case insensitive
    let question = quesInEl.value.toLowerCase();
    console.log(question)
    // check input
    if (question.length === 0) {
        answerOutEl.innerHTML = "Please ask a question..."
    } else if (question === "is javascipt awesome" || question === "is javascript awesome?") {
        answerOutEl.innerHTML = "Of course!"
    } else if (question === "does a magic 8 ball actually work" || question === "does a magic 8 ball actually work?") {
        answerOutEl.innerHTML = "How dare you doubt me!"
    } else if (question === "what is your favorite color" || question === "what is your favorite color?" || question === "what's your favorite color" || question === "what's your favorite color?") {
        answerOutEl.innerHTML = "Black and white, because I'm an 8 ball!"
    } else {
        // pick random answer
        let randAns = Math.random();
        if (randAns < 0.20) {
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
}