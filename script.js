var mitchJokes = [
    "An escalator can never break: it can only become stairs. You should never see an Escalator Temporarily Out Of Order sign, just Escalator Temporarily Stairs. Sorry for the convenience.",
    "I used to do drugs. I still do, but I used to, too.",
    "I had a paper route when I was a kid. I was a paperboy. I was supposed to go to 2,000 houses... or two dumpsters.",
    "I order the club sandwich all the time. And I'm not even a member, man. I don't know how I get away with it.",
    "I bought myself a parrot, the parrot talked, but it did not say \"I'm hungry\"... so it died.",
    "I haven't slept for 10 days... because that would be too long."
];

var joke = document.getElementById("joke");
var generate = document.getElementById("generateMitchJoke");

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

generate.addEventListener("click", displayMitchJoke);