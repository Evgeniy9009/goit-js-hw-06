function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color")
const body = document.querySelector("body")

const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor()
}

btn.addEventListener("click", handleClick)


