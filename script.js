// select all elments 
const form = document.querySelector("#new-item-form")
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// when i submit the form, add a new element

form.addEventListener("submit", e => {
    e.preventDefault()

    // create a new item 
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add("list-item")

    // add that item to the list
    list.appendChild(item)

    // clear input
    input.value = ""

    // setup event listner to delete item when clicked
    item.addEventListener('click', () => {
        item.remove()
    })

})