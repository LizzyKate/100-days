const form = document.querySelector('#customer-form');
const course = document.querySelector('.course');
const name = document.querySelector('.name');
const author = document.querySelector('.author');
const feedBack = document.querySelector('.feedback');
const load = document.querySelector('.loading');
const list = document.querySelector('.customer-list');
const img = document.querySelector('.card-img-top');
form.addEventListener('submit', (e) => {
	e.preventdefault();
	if (course.value = '' && name.value ='' &&  author.value= ''){
		load.classList.add('showItem');
		setTimeOut(() => {
			load.classList.remove('showItem')
		}, 3000);
	// let image = ['cust-0', 'cust-1', 'cust-2', 'cust-3', 'cust-4', 'cust-5'];
	// const pictures = () => {
	// 	for(let i = 0; i < image.length; i++){
	// 		let counter = 0;
	// 		if (counter > image.length - 1){
	// 			counter = 0;
	// 		}
	// 	}
	// }
		let number = [1, 2, 3, 4, 5];
		const random = Math.floor(Math.random() * number.length);
		const div = document.createElement('div');
		 div.classList.add('col-11', 'mx-auto', 'col-md-6', 'my-3', 'col-lg-4');
     div.innerHTML = `<div class="card text-left">
     <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
     <div class="card-body">
      <!-- customer name -->
      <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${name.value}</span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
        ${course.value}
       </span></h6>
      <!-- end of customer name -->
      <!-- customer name -->
      <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${author.value}</span></h6>
      <!-- end of customer name -->
     </div>
    </div>`
    list.appendChild(div)
	}

})