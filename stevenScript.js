var wrightJokes = [
    "On the other hand, you have different fingers.",
    "I stayed up all night playing poker with tarot cards. I got a full house and four people died.",
    "There's a fine line between fishing and standing on the shore looking like an idiot.",
    "I hooked up my accelerator pedal in my car to my brake lights. I hit the gas, people behind me stop, and I'm gone.",
    "I bought a house, on a one-way dead-end road. I don't know how I got there.",
    "I went to a restaurant that serves \"breakfast at any time\". So I ordered French Toast during the Renaissance."
];

var joke = document.getElementById("joke");
var generateSteven = document.getElementById("generateStevenJoke");

function displayStevenJoke() {

    while(joke.firstChild){
        joke.removeChild(joke.firstChild)
    }

    var jokeNum = Math.floor((Math.random() * 5));
    var newJoke = document.createElement("p");
    newJoke.classList.add("gen");
    newJoke.textContent = wrightJokes[jokeNum];
    joke.appendChild(newJoke);
}

generateSteven.addEventListener("click", displayStevenJoke);