

//Build header
const renderHeader = (bookStore) => {
    document.querySelector('h1').textContent = bookStore.name
}

//Build footer
const renderFooter = (bookStore) => {
    document.querySelector('footer div').textContent = bookStore.name
    document.getElementById('address').textContent = bookStore.address
    document.querySelectorAll('footer div')[2].textContent = bookStore.hours
}
//Clear book list
document.querySelector('#book-list li').remove()
//render one book
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
    //prevents the form from refreshing the browser
    e.preventDefault()

    //event-param.what-the-event-listener-is-called-on.attribute-like-name-or-id.value
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

const getStore = () => {
    fetch('http://localhost:3000/stores/1')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        renderHeader(data)
        renderFooter(data)
    })
    
}
const getBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(inventory => {
        console.log(inventory)
        inventory.forEach(renderOneBook)
    })
}
getBooks()
getStore()

