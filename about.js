const button = document.querySelector('#submitBtn');
button.addEventListener('click', () => {
	alert('You have submitted the form successfully');
});

const img = document.querySelector('#logoImg');
img.addEventListener('mouseover', () => {
	alert('You are doing well!');
});


function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);