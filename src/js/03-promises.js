const formEl = document.querySelector(".form")
const buttonEl = document.querySelector("button");



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Hello')
      } else {
        reject('Erorr')
      }
    }, 2000)
  })
  promise.then(value => {console.log(value)}).catch(erorr => {console.log(erorr);})
}





buttonEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault()
  evt.currentTarget.reset()
   
}




// const inputDelay = document.querySelector("input[name='delay']");
// console.log(inputDelay);
// const inputStep = document.querySelector("input[name='step']");
// console.log(inputStep);
// const inputAmount = document.querySelector("input[name='amount']");
// console.log(inputAmount);