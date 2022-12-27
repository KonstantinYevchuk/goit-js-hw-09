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

buttonEl.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < Date.now()) {
            // alert("Please choose a date in the future");
            Notiflix.Notify.failure('Please choose a date in the future');
            return
        } 
        buttonEl.removeAttribute("disabled")
        buttonEl.addEventListener("click", onClick);
    
        function onClick() { 
        setInterval(() => {
            const timeLeft = convertMs(selectedDates[0] - new Date());
            console.log(`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`);
            daysEl.textContent = addLeadingZero(timeLeft.days);
            hoursEl.textContent = addLeadingZero(timeLeft.hours);
            minutesEl.textContent = addLeadingZero(timeLeft.minutes);
            secondEl.textContent = addLeadingZero(timeLeft.seconds);
        }, 1000)  
            buttonEl.setAttribute("disabled", "true");
            inputEl.setAttribute("disabled", "true")  
           
    }
    },
  };

flatpickr(inputEl, options);

function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds }; 
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


const bodyEl = document.querySelector("body");
bodyEl.style.fontFamily = "sans-serif";

const timerEl = document.querySelector(".timer");
timerEl.style.display = "flex";

const fieldEl = document.querySelectorAll(".field");
fieldEl.forEach(item => {
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.margin = "20px";
    item.style.justifyContent = "center";
});

const valueEl = document.querySelectorAll(".value")
valueEl.forEach(item => {
    item.style.fontSize = "40px";
    
})
const labelEl = document.querySelectorAll(".label");
labelEl.forEach(item => {
    item.style.fontSize = "15px";
})