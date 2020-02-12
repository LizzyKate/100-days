const color= ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];
const change = document.querySelector('.change');
const body = document.querySelector('body');
body.style.backgroundColor = 'red';
function changeBackground (){
    const colorMe = parseInt(Math.random() * color.length);
    body.style.backgroundColor =color[colorMe];
}
change.addEventListener('click', changeBackground);