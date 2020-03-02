// (function(){
// 	const picture = document.querySelector('#customer-img');
// 	const identity = document.querySelector('#customer-name');
// 	const para = document.querySelector('#customer-text');
// 	const buttons = document.querySelectorAll('.btn');
// 	const pack = [
// 	{
// 		name:'John',
// 		text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
// 		image:'customer-0'
// 	},
// 		{
// 		name:'Sandra',
// 		text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
// 		image:'customer-1'
// 	},
// 	{
// 		name:'Tyrell',
// 		text:'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
// 		image:'customer-2'
// 	},
// 	{
// 		name:'Amy',
// 		text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
// 		image:'customer-3'
// 	},
// 	{
// 		name:'Wanda',
// 		text:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
// 		image:'customer-4'
// 	}
// 	];
// 	let counter = 0;
// 	buttons.forEach((button) =>{
// 		button.addEventListener('click', function(){
// 			if (button.classList.contains('prevBtn')){
// 				counter--;
// 				if (counter < 0){
// 					counter = pack.length - 1;
// 				}
// 				identity.textContent = pack[counter].name;
// 				para.textContent = pack[counter].text;
// 				picture.src = `./img/${pack[counter].image}.jpg`;
// 			} else if(button.classList.contains('nextBtn')){
// 				counter ++;
// 				if (counter > pack.length - 1){
// 					counter = 0;
// 				}
// 				identity.textContent = pack[counter].name;
// 				para.textContent = pack[counter].text;
// 				picture.src = `./img/${pack[counter].image}.jpg`;
// 			}
// 		})
// 	}) 
// }) ();


class Testimonial {
	constructor(name, image, text){
		this.name = name
		this.image =`./img/${image}.jpg`
		this.text = text
	}
}

let person1 = new Testimonial('John', 'customer-0', 'its a nice product')
let person2 = new Testimonial('Sandra', 'customer-1', 'nice sgfdgdt')
let person3 = new Testimonial('Sandra', 'customer-2', 'sdtsgfhfsgdg')
let person4 = new Testimonial('Sandra', 'customer-3', 'nic      uct')

pack = [person1, person2, person3, person4]


const picture = document.querySelector('#customer-img');
	const identity = document.querySelector('#customer-name');
	const para = document.querySelector('#customer-text');
	const buttons = document.querySelectorAll('.btn');
	let counter = 0;
	buttons.forEach((button) =>{
		button.addEventListener('click', function(){
			if (button.classList.contains('prevBtn')){
				counter--;
				if (counter < 0){
					counter = pack.length - 1;
				}
				identity.textContent = pack[counter].name;
				para.textContent = pack[counter].text;
				picture.src = pack[counter].image
			} else if(button.classList.contains('nextBtn')){
				counter ++;
				if (counter > pack.length - 1){
					counter = 0;
				}
				identity.textContent = pack[counter].name;
				para.textContent = pack[counter].text;
				picture.src =  pack[counter].image
			}
		})
	}) 