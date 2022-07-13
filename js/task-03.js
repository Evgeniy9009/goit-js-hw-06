const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery")
console.log(list)

// const elements = images.map(image => {
//   const itemEl = document.createElement("li")
//   const imgEl = document.createElement("img")
//   imgEl.src = image.url
//   imgEl.alt = image.alt
//   itemEl.append(imgEl)

//   return itemEl
// })

// console.log(elements)

// list.append(...elements)



console.log(list)

const markup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}" class="image"></li>`)
  .join("")

console.log(markup)

list.insertAdjacentHTML("beforeend", markup)

const img = document.querySelectorAll("img")
console.log(img)

