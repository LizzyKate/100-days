// (function(){
const button = document.querySelector('form');
const modal = document.querySelector('.color');
button.addEventListener('submit', (e) => {
	modal.classList.add('appear')
	e.preventDefault()
})
const angle = document.querySelectorAll('.angle');
angle.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		modal.classList.remove('appear');
	})
}) 

// }) ();

