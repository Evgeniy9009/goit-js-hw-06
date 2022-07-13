function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input')
const createDivs = document.querySelector('button[data-create]') 
const destroyDivs = document.querySelector('button[data-destroy]')
const boxes = document.querySelector("#boxes")



function setNumber() {
  console.log(input.value)
  return input.value
}

input.addEventListener("change", setNumber)


function createBoxes(amount) {

  amount = input.value

  for (let i = 0; i < amount; i += 1) {

    const randomColor = getRandomHexColor()
    const box = document.createElement("div")
    let amountPx = 30 + i*10

    box.style.width = `${amountPx}px`
    box.style.height = `${amountPx}px`
    box.style.backgroundColor = randomColor
    box.style.border = "1px solid black"
    boxes.append(box)
    }
  }

const boxesRemove = () => {
  boxes.innerHTML = ""
}

createDivs.addEventListener("click", createBoxes)

destroyDivs.addEventListener("click", boxesRemove)