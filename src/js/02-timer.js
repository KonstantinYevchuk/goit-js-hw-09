const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";
import Notiflix from 'notiflix';


const buttonEl = document.querySelector("button[data-start]");
const inputEl = document.querySelector("#datetime-picker");


const secondEl = document.querySelector(".value[data-seconds]");
const minutesEl = document.querySelector(".value[data-minutes]");
const hoursEl = document.querySelector(".value[data-hours]");
const daysEl = document.querySelector(".value[data-days]");

let finalTime = null;
buttonEl.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        finalTime = new Date(selectedDates[0].getTime());
        
        finalTimeCheck(finalTime, new Date())
        
    },
  };

flatpickr(inputEl, options);

buttonEl.removeAttribute("disabled")
buttonEl.addEventListener("click", onClick);
    
function onClick() { 
    const timerId = setInterval(() => {
            const timeLeft = convertMs(finalTime - new Date());
            console.log(`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`);
            timerCounter(timeLeft)

            zeroTime(timeLeft, timerId)
        }, 1000)  
            buttonEl.setAttribute("disabled", "true");
            inputEl.setAttribute("disabled", "true")  

            
           
    }

    function timerCounter({days, hours, minutes, seconds}) {
            daysEl.textContent = addLeadingZero(days);
            hoursEl.textContent = addLeadingZero(hours);
            minutesEl.textContent = addLeadingZero(minutes);
            secondEl.textContent = addLeadingZero(seconds);
    }

function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds }; 
  }

  function finalTimeCheck(final, current) {
    if(final <= new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        buttonEl.setAttribute("disabled", true);
    } else {
        buttonEl.removeAttribute("disabled")
    }
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  function zeroTime(time, interval) {
    if(Object.values(time).every(item => item === 0)) {
        clearInterval(interval)
    }
  }

// const bodyEl = document.querySelector("body");
// bodyEl.style.fontFamily = "sans-serif";

// const timerEl = document.querySelector(".timer");
// timerEl.style.display = "flex";

// const fieldEl = document.querySelectorAll(".field");
// fieldEl.forEach(item => {
//     item.style.display = "flex";
//     item.style.flexDirection = "column";
//     item.style.margin = "20px";
//     item.style.justifyContent = "center";
// });

// const valueEl = document.querySelectorAll(".value")
// valueEl.forEach(item => {
//     item.style.fontSize = "40px";
    
// })
// const labelEl = document.querySelectorAll(".label");
// labelEl.forEach(item => {
//     item.style.fontSize = "15px";
// })