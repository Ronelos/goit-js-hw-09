import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', onButtonCreate);

function onButtonCreate(event) {
  event.preventDefault();
  let delay = +event.currentTarget.elements.delay.value;
  let step = +event.currentTarget.elements.step.value;
  const amount = +event.currentTarget.elements.amount.value;

   if (delay < 0 || step < 0 || amount < 0) {
    Notiflix.Notify.warning('Error! Values must be >= 0')
    return;
  }

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position,delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
      delay += step;
    }   
  }
 

function createPromise(position, delay) {

  const promise = new Promise((reslove , reject) => {
   
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;

      if(shouldResolve) reslove({position, delay});
      else reject({position, delay});

      },delay);

  })

  return promise;
}  