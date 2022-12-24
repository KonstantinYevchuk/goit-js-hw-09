const bodyEl = document.querySelector("body");
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");

bodyEl.style.textAlign = "center";
buttonStart.style.padding = "15px 30px";
buttonStart.style.fontSize = "20px";
buttonStart.style.backgroundColor = "white";
buttonStop.style.padding = "15px 30px";
buttonStop.style.fontSize = "20px";
buttonStop.style.backgroundColor = "white";

buttonStop.setAttribute("disabled", "true");
let timerId = null;

buttonStart.addEventListener("click", handleClickStart);
buttonStop.addEventListener("click", handleClickStop);


function handleClickStart() {
    if(!bodyEl.hasAttribute("background-color")) {
        timerId = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor()
        }, 1000);
        buttonStart.setAttribute("disabled", "true");
        buttonStop.removeAttribute("disabled");
         
    } else {
        clearInterval(timerId)
    }
}

function handleClickStop() {
    buttonStart.removeAttribute("disabled");
    buttonStop.setAttribute("disabled", "true");
    clearInterval(timerId);

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
