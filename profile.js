const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');
const submitBtn = document.querySelector("#buttonSubmit");

color.addEventListener('click', () => {
    alert('My favorite color is Green');
});

place.addEventListener('click', () => {
    alert('My favorite place is Monterrey, Mexico');
});

ritual.addEventListener('click', () => {
    alert('My favorite ritual is the Luigi summoning ritual.');
});

submitBtn.addEventListener('click', () => {
    alert('You have submitted the form successfully');
});
