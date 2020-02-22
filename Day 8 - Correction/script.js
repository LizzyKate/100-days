
const newMessage = (() => {
	const form = document.querySelector('#message-form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const input = document.querySelector('#message');
		const feedBack = document.querySelector('.feedback');
		const content = document.querySelector('.message-content');
		if (input.value === '') {
			feedBack.classList.add('show');
			setTimeout(() => {
				feedBack.classList.remove('show')
			}, 2000)
		} else {
			content.textContent = input.value;
			input.value = '';
		}
	})
}) ();
// newMessage();



