const list = document.querySelector('#categories')

const items = list.querySelectorAll('.item')

console.log(`Number of categories: `, items.length)

// const title = items[0].querySelector('h2')

// console.log(title.textContent)

// console.log(items)

items.forEach(function (item) {
    const title = item.querySelector('h2')
    console.log(`Category: ` , title.textContent)

    const list = item.querySelector('ul')
    const li = list.querySelectorAll('li')
    console.log(`Elements: `, li.length)
})
