let counterElement = document.querySelector("h1#counter");
let minusButtonElement = document.querySelector("button#minus");
let plusButtonElement = document.querySelector("button#plus");
let heartButtonElement = document.querySelector("button#heart");
let pauseButtonElement = document.querySelector("button#pause");
let submitButtonElement = document.querySelector("button#submit");
let likeAnnouncementElement = document.querySelector("ul.likes");
let inputTextElement = document.querySelector("input#comment-input")
let commentTextElementParent = document.querySelector("div.comments")
let commentFormElement = document.querySelector("form#comment-form");
let counter = 0;
let likeCounter = 0;
let isPaused = false;

setInterval(function() {
    counterIncrement(),
    likeCounter = 0;}, 1000);

minusButtonElement.addEventListener("click", counterDecrement);
plusButtonElement.addEventListener("click", counterIncrement);

heartButtonElement.addEventListener("click", function() {
    likeCounter++;
    if (likeCounter === 1) {
        let likeCounterAnnouncement = document.createElement("li")
        likeAnnouncementElement.append(likeCounterAnnouncement);
    }
    let likeCounterAnnouncement = likeAnnouncementElement.lastChild;
    likeCounterAnnouncement.textContent = `${counter} has been liked ${likeCounter} times`;
})

pauseButtonElement.addEventListener("click", function(event) {
    isPaused = !isPaused;
    pauseButtonElement.innerText = isPaused? "resume" : "pause";
    minusButtonElement.disabled = isPaused;
    plusButtonElement.disabled = isPaused;
    heartButtonElement.disabled = isPaused;
    submitButtonElement.disabled = isPaused;
})

submitButtonElement.addEventListener("click", function(event) {
    event.preventDefault();
    newComment = document.createElement("p")
    newComment.innerText = inputTextElement.value;
    commentTextElementParent.append(newComment);
    commentFormElement.reset();
})

function counterIncrement() {
    counterElement.innerText = counter;
    counter++;
}

function counterDecrement() {
    counterElement.innerText = counter;
    counter--;
}


// setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

// function myCallback(a, b)
// {
//  // Your code here
//  // Parameters are purely optional.
//  console.log(a);
//  console.log(b);
// }
// setInterval(function () {console.log("Hello")}, 3000);
