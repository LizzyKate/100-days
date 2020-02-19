const buttons = document.querySelectorAll('.counterBtn');
let count = 0;
buttons.forEach((e) =>{
    e.addEventListener('click', function(){
      if (e.classList.contains('prevBtn')){
        count--
      } else if (e.classList.contains('nextBtn')){
        count++
      }
  const counter = document.querySelector('#counter');
counter.textContent =count;
 if (count<0){
 	counter.style.color = 'red';
 }else if (count>0){
 	counter.style.color = 'green';
 }else{
 	counter.style.color =  '#333333'
 }
})
})

// const change = () => {
// 	if (button.classList.contains('prevBtn')){
// 		count--
// 	}elseif (button.classList.contains('nextBtn')) 
// 		count++
	
// }

// buttons.forEach((button) => {
// 	button.addEventListener('click', change)
// })
// const counter = document.querySelector('#counter');
// counter.textContent =count;