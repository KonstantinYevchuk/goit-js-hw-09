import Notiflix from 'notiflix';

const formEl = document.querySelector(".form")

// const inputDelay = document.querySelector("input[name='delay']");
// const inputStep = document.querySelector("input[name='step']");
// const inputAmount = document.querySelector("input[name='amount']");


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
  
}

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault()
  const {
    elements: {delay, step, amount}  
  } = evt.currentTarget;
  const firstDelay = Number(delay.value);
  const stepEl = Number(step.value);
  const amountEl = Number(amount.value);
    
    for (let i = 1; i <= amountEl; i += 1){
      const delayStep = firstDelay + stepEl * (i - 1);
      createPromise(i, delayStep).then(onSuccess).catch(onError)
    };
}

function onSuccess({ position, delay }) { 
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};









