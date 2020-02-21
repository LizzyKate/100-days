(function() {
	const pictures = [
	"contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
	];
	const buttons = document.querySelectorAll('.btn');
	const slider = document.querySelector('.img-container');
	let counter = 0;
	buttons.forEach((button) => {
		button.addEventListener('click', function(){
			if (button.classList.contains('btn-left')) {
				counter --;
				if(counter < 0){
					counter = pictures.length - 1;
				}
				slider.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`;
			}else if(button.classList.contains('btn-right')) {
				counter++;
				if(counter> pictures.length - 1){
					counter = 0;
				}
				slider.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`;
			}
	})
})
})();