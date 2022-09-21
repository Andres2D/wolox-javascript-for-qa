
const form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const inputs = document.getElementsByTagName('input');
  const user = inputs[0].value;

  alert(`Welcome, ${user}`);
  inputs[0].value = "";
  inputs[1].value = "";
});
