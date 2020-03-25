const form = document.getElementById('input-form');
const input = document.getElementById('input-value');
const feedback = document.querySelector('.feedback');
const listItems = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clearBtn');


const showFeedback = (element, result, text) => {
	element.classList.add('showItem', `${result}`);
	element.innerHTML = `<p>${text}</p>`

	 setTimeout( () => {
        element.classList.remove('showItem');
    }, 3000)
}
const addStorage = (value) => {
	let items;

    if(localStorage.getItem('grocery-list')){
        items = JSON.parse(localStorage.getItem('grocery-list'));
    } else {
        items = [];
    }

    items.push(value);
    localStorage.setItem('grocery-list', JSON.stringify(items));

	// let items = [];
	// items.push(input.value);
	// localStorage.setItem('grocery-list', JSON.stringify(items));
	// if (localStorage.getItem('grocery-list')){
	// 	items = JSON.parse(localStorage.getItem('grocery-list'));
	// } else {
	// 	items = [];
	// }
}
const addItem = () =>{
	const div = document.createElement('div');
	 div.classList.add('item', 'my-3', 'd-flex','justify-content-between','p-2');
    div.innerHTML = `<h5 class="item-title text-capitalize">${input.value}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
   </div>`
   listItems.appendChild(div);
  input.value = '';
  addStorage();
   showFeedback(feedback, 'alert-sucess', 'item added to the list')
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(input.value === ''){
		showFeedback(feedback, 'alert-danger', 'Cannot Add Empty Value')
	}else {
		addItem();
	}
})
listItems.addEventListener('click', (e) => {
	if(e.target.parentElement.classList.contains('remove-icon')){
		let parent = e.target.parentElement.parentElement;
		listItems.removeChild(parent);
	}
})
const clearStorage = () => {
	localStorage.removeItem('grocery-list');
}
clearBtn.addEventListener('click', (e) =>{
	for(let i= 0; i< listItems.children.length; i++){
		listItems.innerHTML = '';
		clearStorage();
		console.log('storage cleared');
	}
	// while(listItems.children.length>0){
	// 	listItems.innerHTML = '';
	
})


// //clear single item in the local storage
// function clearSingle(value){
//     const tempItems = JSON.parse(localStorage.getItem('grocery-list'));
//     const items = tempItems.filter(function(item){
//         if(item !== value){
//             return item;
//         }
//     })
//     localStorage.removeItem('grocery-list');
//     localStorage.setItem('grocery-list', JSON.stringify(items));
// }