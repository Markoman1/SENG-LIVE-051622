//1. POST: On submit, data should be sent to our server and create a new resource.
//2. When the resource is returned from the server, it should be rendered to the client. 
//3. PATCH: Add an inventory number input to a book card. On change the inventory number should update on the server. 
//4. DELETE: On Click of the delete button the book should be removed from the server. 

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
    const inventoryInput = document.createElement('input')

    h3.textContent = book.title
    pAuthor.textContent = `Author: ${book.author}`
    pPrice.textContent = `$${book.price}`
    btn.textContent = 'Delete'

    img.src = book.imageUrl
    inventoryInput.value = book.inventory
    inventoryInput.type = 'number'
    li.className = 'list-li'

    //Event Listeners 
    inventoryInput.addEventListener('change', (e) => {
        updateBook(e.target.value, book.id, e)
    })

    btn.addEventListener('click', (e) => deleteBook(book.id, e))
   
    li.append(h3,pAuthor,pPrice,img,inventoryInput,btn)
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
    createBook(book)
})

//READ: GET - 1
const getStore = () => {
    fetch('http://localhost:3000/stores/1')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        renderHeader(data)
        renderFooter(data)
    })
    .catch(e => console.log(e))
}
//READ: GET - all
const getBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(inventory => {
        console.log(inventory)
        inventory.forEach(renderOneBook)
    })
    .catch(e => console.log(e))
}



// const getBooks = async () => {
//     const res = await fetch('http://localhost:3000/books')
//     const inventory = await res.json()
//     inventory.forEach(renderOneBook)
//}     
//CREATE: POST
const createBook = (book) => {
    fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => renderOneBook(data))
    .catch(e => console.log(e))
}

//UPDATE: PATCH
const updateBook = (data, bookID, e) => {
    fetch(`http://localhost:3000/books/${bookID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({inventory: data})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.error(e))
    // JSON.stringify({reviews:[...book.reviews, newBook.review]})
   // .then(data => e.target.value = data.inventory)
}

//DELETE: DESTROY
const deleteBook = (bookID, e) => {
    fetch(`http://localhost:3000/books/${bookID}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        e.target.parentNode.remove()
    })
    .catch(e => console.error(e))
}



getBooks()
getStore()

