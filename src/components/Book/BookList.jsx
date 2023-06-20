import React from 'react'
import Book from './Book'
function BookList({libros = []}) {
  console.log(libros)
  let libro = []
  libro.push(libros)
  // for(const valores in libros) {
  //   let item = libros[valores]
  //   console.log(item)
  // }
  libro.map((book)=>{
    <Book {...book}/>
  })
  return (
    <div>
        
        

      
        
        {/* {libros.map(book=> <Book {...book}/>)} */}
    </div>
  )
}

export default BookList