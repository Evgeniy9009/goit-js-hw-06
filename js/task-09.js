function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color")
const body = document.querySelector("body")
const color = document.querySelector(".color")

const handleClick = () => {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
  color.textContent = randomColor

}

btn.addEventListener("click", handleClick)


