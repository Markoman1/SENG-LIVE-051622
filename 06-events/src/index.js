//Build header
document.querySelector('h1').textContent = bookStore.name
//Review 
// Render name, address and store hours to footer
//Build book list
bookStore.inventory.forEach(book => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')

    h3.textContent = book.title
    pAuthor.textContent = `Author: ${book.author}`
    pPrice.textContent = `$${book.price}`
    img.src = book.imageUrl
    li.className = 'list-li'
   
    li.append(h3,pAuthor,pPrice,img)
    document.querySelector('#book-list').append(li)
})
