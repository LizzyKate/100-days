const todo = () => {
	const form = document.querySelector('form');
	const input = document.querySelector('#itemInput');
	const list = document.querySelector('.item-list');
	const button = document.querySelector('#clear-list');
	const feedback = document.querySelector('.feedback');
	const inputLength = () => {
		return input.value.length
	}
// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault();
// 		if(inputLength > 0){
// 			const add = document.createElement('p');
// 			add.appendChild(document.createTextNode(input.value));
// 			list.appendChild(add);
// 			input.value = '';
// 		}
// 	})
// 	button.addEventListener('click', () => {
// 		list.classList.remove('showItem');
// 	})
// }