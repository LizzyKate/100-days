const input = document.querySelector(".input");
const button = document.querySelector("#submit");
const head = document.querySelector(".last");
const inputLength = () => {
    console.log (input.value.length)
    return input.value.length;

}
const newInput = () => {
   //  console .log (input.value);
    head.textContent = input.value;
   input.value = '';
}
const addList = () => {
    if (inputLength() > 0) {
        newInput();
        console.log("click");
    }
}
const newList = e => {
    if (inputLength() > 0 && e.keyCode ===13) {
        newInput();
    }
}
button.addEventListener('click', addList);
input.addEventListener('keypress', newList);