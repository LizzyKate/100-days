const todo = () => {
	const form = document.querySelector('form');
	const input = document.querySelector('.itemInput');
	const list = document.querySelector('.feedback');
	const button = document.querySelector('#clear-list');
	const inputLength = () => {
		return input.value.length
		console.log(inputLength)
	}
	inputLength();

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if(inputLength() > 0){
			const add = document.createElement('p');
			add.appendChild(document.createTextNode(input.value));
			list.appendChild(add);
			input.value = '';
		}
	})
	// input.addEventListener('onFocus', (e) => {
	// 	list.classList.add('showItem');
	// })
	button.addEventListener('click', function(e) {
     	list.innerHTML = '';
    });
}
todo();