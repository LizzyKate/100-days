const form = document.querySelector('#customer-form');
const input = document.querySelectorAll('input')
const course = document.querySelector('.course');
const name = document.querySelector('.name');
const author = document.querySelector('.author');
const feedBack = document.querySelector('.feedback');
const load = document.querySelector('.loading');
const list = document.querySelector('.customer-list');
const img = document.querySelector('.card-img-top');
form.addEventListener('submit', (e) => {
  e.preventDefault();
	if ( name.value !== '' && course.value !== '' && author.value !== ''){
		load.classList.add('showItem');
		setTimeout(() => {
			load.classList.remove('showItem')
		}, 3000);
		let count = [1, 2, 3, 4, 5];
		let pick = Math.floor(Math.random() * count.length);
		const div = document.createElement('div');
		 div.classList.add('col-11', 'mx-auto', 'col-md-6', 'my-3', 'col-lg-4');
     div.innerHTML = `<div class="card text-left">
     <img src="./img/cust-${pick}.jpg" class="card-img-top" alt="">
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
    name.value = '';
    course.value = '';
    author.value = '';
    
	}

})