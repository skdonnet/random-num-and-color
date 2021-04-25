const min = document.getElementById('minimum');
const max = document.getElementById('maximum');
const button = document.getElementById('getRandNum');

const p = document.createElement('p');

document.body.appendChild(p);

document.min.addEventListener('input', event => {
  Math.floor = event.value;
});

document.max.addEventListener('input', event => {
  Math.ceil = event.value;
});

document.addEventListener('click', event => {
  Math.floor(Math.random() * (max - min + 1) + min);
});
