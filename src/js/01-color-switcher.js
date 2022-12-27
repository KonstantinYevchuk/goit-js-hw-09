const bodyEl = document.body;
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");

bodyEl.style.textAlign = "center";
buttonStart.style.padding = "15px 30px";
buttonStart.style.fontSize = "20px";
buttonStart.style.backgroundColor = "white";
buttonStop.style.padding = "15px 30px";
buttonStop.style.fontSize = "20px";
buttonStop.style.backgroundColor = "white";

// buttonStop.setAttribute("disabled", "true");
setButton(set, buttonStop)
let timerId = null;

buttonStart.addEventListener("click", handleClickStart);
buttonStop.addEventListener("click", handleClickStop);


function handleClickStart() {
    if(!bodyEl.hasAttribute("background-color")) {
        timerId = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor()
        }, 1000);
        setButton(buttonStart, remove);
        setButton(set, buttonStop);
         
    } else {
        clearInterval(timerId)
    }
}

function handleClickStop() {
    setButton(buttonStart, remove);
    setButton(set, buttonStop);
    clearInterval(timerId);

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function setButton(set, remove) {
    set.setAttribute("disabled", true);
    remove.removeAttribute("disabled");
}