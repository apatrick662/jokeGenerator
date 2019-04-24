var mitchJokes = [
    "An escalator can never break: it can only become stairs. You should never see an Escalator Temporarily Out Of Order sign, just Escalator Temporarily Stairs. Sorry for the convenience.",
    "I used to do drugs. I still do, but I used to, too.",
    "I had a paper route when I was a kid. I was a paperboy. I was supposed to go to 2,000 houses... or two dumpsters.",
    "I order the club sandwich all the time. And I'm not even a member, man. I don't know how I get away with it.",
    "I bought myself a parrot, the parrot talked, but it did not say \"I'm hungry\"... so it died.",
    "I haven't slept for 10 days... because that would be too long."
];

var wrightJokes = [
    "On the other hand, you have different fingers.",
    "I stayed up all night playing poker with tarot cards. I got a full house and four people died.",
    "There's a fine line between fishing and standing on the shore looking like an idiot.",
    "I hooked up my accelerator pedal in my car to my brake lights. I hit the gas, people behind me stop, and I'm gone.",
    "I bought a house, on a one-way dead-end road. I don't know how I got there.",
    "I went to a restaurant that serves \"breakfast at any time\". So I ordered French Toast during the Renaissance."
];

var joke = document.getElementById("joke");
var generate = document.getElementById("generateMitchJoke");
// var generateSteven = document.getElementById("generateStevenJoke");


function displayMitchJoke() {

    while(joke.firstChild){
        joke.removeChild(joke.firstChild)
    }

    var jokeNum = Math.floor((Math.random() * 5));
    var newJoke = document.createElement("p");
    newJoke.classList.add("gen");
    newJoke.textContent = mitchJokes[jokeNum];
    joke.appendChild(newJoke);
}

// function displayStevenJoke() {

//     while(joke.firstChild){
//         joke.removeChild(joke.firstChild)
//     }

//     var jokeNum = Math.floor((Math.random() * 5));
//     var newJoke = document.createElement("p");
//     newJoke.classList.add("gen");
//     newJoke.textContent = wrightJokes[jokeNum];
//     joke.appendChild(newJoke);
// }

generate.addEventListener("click", displayMitchJoke);
// generateSteven.addEventListener("click", displayStevenJoke);