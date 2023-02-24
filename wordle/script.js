function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

let current = 1;
const game_status = {
    in_progress : "in_progress",
    won : "won",
    lost : "lost",
};
let wordle_status = game_status.in_progress;

function keypress(e) {
    if(wordle_status != game_status.in_progress) return;

    if ( !isLetter(e.key) &&
            (e.key != "Enter" && !isLastCharOfLine() ) &&
            (e.key != "Backspace" && !isFirstCharOfLine())) {
        return;
    }

    if(e.key == "Backspace") {
        let currentValue = document.querySelector("#box" + String(current)).innerHTML
        if(isLastCharOfLine() && currentValue != "")
            document.querySelector("#box" + String(current)).innerHTML = "";
        else {
            document.querySelector("#box" + String(current-1)).innerHTML = "";
            if(current > 1) current--;
        }  
        return;
    }

    if(isLastCharOfLine() && e.key == "Enter") {
        validateWord();
        return;
    }

    if( isLetter(e.key) && current <= 30 ){
        document.querySelector("#box" + current).innerHTML = e.key.toUpperCase();
        if(!isLastCharOfLine())
            current++;
    }
}

async function validateWord() {
    spinnerOn();
    const promise = await fetch("https://words.dev-apis.com/word-of-the-day");
    const processedResponse = await promise.json();

    let word =  processedResponse.word.toUpperCase();
    console.log(word);

    let guess = "";
    for(let i = 0 ; i <= 4 ; i++) {
        guess += document.querySelector("#box" + String(current-4+i)).innerHTML;
    }

    for(let i = 0 ; i <= 4 ; i++) {
        let box = document.querySelector("#box" + String(current-4+i));
        if(guess[i] == word[i])
            box.classList.add('green');
        else if ( word.includes(guess[i]) && 
            countCharInString(guess.slice(0,i+1), guess[i]) <= countCharInString(word, guess[i])) {
            box.classList.add('orange');
        }
        else box.classList.add('grey');
    }

    spinnerOff();
    if(guess == word) {
        wordle_status = game_status.won;
        Won();
    }
    else if(current == 30) {
        wordle_status = game_status.lost;
        Lost();
    }
    current++;
}

function countCharInString(str, c) {
    return (str.match( RegExp(c, 'g' )) || []).length;
}

function spinnerOn() {
    let classList = document.querySelector('.loader').classList;
    if(!classList.contains("visible"))
        classList.add("visible");
    if(classList.contains("not-visible"))
        classList.remove('not-visible');
}

function spinnerOff() {
    let classList = document.querySelector('.loader').classList;
    if(!classList.contains("not-visible"))
        classList.add("not-visible");
    if(classList.contains("visible"))
        classList.remove('visible');
}

function Lost(){
    let msgDiv = document.querySelector('.endgame-msg');
    if(!msgDiv.classList.contains("visible"))
        msgDiv.classList.add("visible");
    if(msgDiv.classList.contains("not-visible"))
        msgDiv.classList.remove('not-visible');
    msgDiv.innerHTML = "You lose";
}

function Won() {
    let msgDiv = document.querySelector('.endgame-msg');
    if(!msgDiv.classList.contains("visible"))
        msgDiv.classList.add("visible");
    if(msgDiv.classList.contains("not-visible"))
        msgDiv.classList.remove('not-visible');
    msgDiv.innerHTML = "You win";
}

function isLastCharOfLine() {
    return current % 5 == 0; 
}

function isFirstCharOfLine() {
    return current % 5 == 1; 
}

document.addEventListener("keydown", e => keypress(e));