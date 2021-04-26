const root = document.querySelector(':root');
const minOld = document.getElementById('minimum');
const maxOld = document.getElementById('maximum');
const p = document.createElement('p');
let minNew = 0;
let maxNew = 0;

document.querySelector('#minButton').addEventListener('click', event => {
  minNew = minOld.value;
});

document.querySelector('#maxButton').addEventListener('click', event => {
  maxNew = maxOld.value;
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // mdn
}

document.querySelector('#getRandNum').addEventListener('click', event => {
  const newNum = getRandomIntInclusive(minNew, maxNew);
  p.innerText = newNum;
  console.log(newNum);
});

document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    root.style.setProperty('--color', `${event.target.value}`);
  });
