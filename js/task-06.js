const input = document.querySelector("#validation-input")
console.log(input.attributes)
const dataLength = input.getAttribute("data-length")
// console.log(dataLength)

input.addEventListener("blur", () => {
    // console.log('Инпут получил фокус - событие focus');
    console.log(input.value.length)
    console.log(dataLength)

    if (input.value.length != dataLength) {
        input.classList.add("invalid")
        input.classList.remove("valid")
        console.log('no 6');
    } else {
        input.classList.add("valid")
        input.classList.remove("invalid")
        console.log('6');
    }
})