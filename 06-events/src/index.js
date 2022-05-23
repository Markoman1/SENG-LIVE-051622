//Build header
document.querySelector('h1').textContent = bookStore.name
//Review 
// Render name, address and store hours to footer
console.log(bookStore)
document.querySelector('footer div').textContent = bookStore.name

document.getElementById('address').textContent = bookStore.address

document.querySelectorAll('footer div')[2].textContent = bookStore.hours
// console.log(document.getElementsByTagName('div'))

//Clear content from the DOM
document.querySelector('#book-list li').remove()
// document.querySelector('#book-list li').innerHTML = ''
// document.querySelector('#book-list li').innerHTML = '<div>Rose is cute</div>'

//1. Remove a book from the DOM with a click event
// document.querySelector('h1').addEventListener('click', ()=>{
//   console.log('hi')  
// })

//Adding Content with a form
//2. Use a submit event to get data from a form and add it to the DOM
// Are we using an Event?
    // when DOM Loads 
    // 
// What Event are you using
    // clicking on something
    // submitting something 
    // What action are we waiting for
// Pick a target to trigger the event
// Add the eventListener to the target 
// pass the target the event and callback

//Event: Submit 
//Target: Form

const renderOneBook = book => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')

    h3.textContent = book.title
    pAuthor.textContent = `Author: ${book.author}`
    pPrice.textContent = `$${book.price}`
    btn.textContent = 'Delete'

    img.src = book.imageUrl
    li.className = 'list-li'

    //Event Listeners 
    btn.addEventListener('click',()=>li.remove())
   
    li.append(h3,pAuthor,pPrice,img,btn)
    document.querySelector('#book-list').append(li)
}

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    //ID
    console.log(e.target["form-title"])
    //Name
    const book = {
        title: e.target.title.value,
        author:e.target.author.value,
        price: e.target.price.value,
        imageUrl: e.target.imageUrl.value,
        inventory:e.target.inventory.value,
        reviews:[]
    }
    renderOneBook(book)
})

//Build book list
bookStore.inventory.forEach(renderOneBook)
