const fontSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

console.log(fontSizeControl.value)
text.style.fontSize = '10px'

fontSizeControl.addEventListener("input", (event) => {
    console.log(event.currentTarget.value)
    text.style.fontSize = `${fontSizeControl.value}px`
})