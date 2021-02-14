const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // will stop bubbling
}

divs.forEach(div=> div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', ()=> {
  console.log('click!!!!');
}, {
  once: true
});
