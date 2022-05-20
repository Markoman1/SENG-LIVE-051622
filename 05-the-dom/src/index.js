//
document.querySelector('h1').textContent = bookStore.name

document.querySelector('h2').textContent = bookStore.address

document.querySelectorAll('h2')[1].textContent = bookStore.number

const hours = document.createElement('h2')
hours.textContent = bookStore.hours

document.querySelector('div header div').append(hours)

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
    // console.log(document.getElementById('book-list'))
})

const arr = [[1,2,3],
 [4,5,5],
 [7,8,9]]
 arr.forEach(nestedArr => {
     const div = document.createElement('div')
     nestedArr.forEach(num => {
         const p = document.createElement('p')
         p.textContent = num
         div.append(p)
     })
     console.log(div)
     document.querySelector('footer').append(div)
 })

