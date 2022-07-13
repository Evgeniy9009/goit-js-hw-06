const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

let counterValue = 0

// value.textContent = counterValue

    console.log(decrement, increment, value)


const decrementValue = () => {
    console.log(value)
    counterValue -= 1
value.textContent = counterValue}

const incrementValue = () => {
    console.log(value)
    counterValue += 1
value.textContent = counterValue}

decrement.addEventListener("click", decrementValue)
increment.addEventListener("click", incrementValue)
