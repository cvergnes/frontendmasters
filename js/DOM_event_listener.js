const redSquare = document.querySelector(".red-square");
redSquare.style.backgoundColor = "green";

redSquare.classList.add('lol-class');

redSquare.innerText = "Modified by JavaScript!";
redSquare.innerHTML = "<b>Modified by JavaScript!</b>";

const btn = document.querySelector('.eventBtn');
btn.addEventListener('click', (e) => console.log(e));

// event.target and bubbling
document.querySelector('.btn-list').addEventListener('click', 
e => console.log(e.target.innerText));
