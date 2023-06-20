import React, { useState, useEffect } from 'react'

function Book() {
  // console.log(title, author, status)
  const [book, setBook] = useState()
  useEffect(()=>{
    const books = JSON.parse(localStorage.getItem('books'))
    if(books) setBook(books); 
  }, [])
  console.log(book)
  return (
    <>
      {
          book?.map((libros)=>(
              <div key={libros.id}>
                <h1>Title: {libros.title}</h1>
                <h1>Author: {libros.author}</h1>
                <h1>Status: {libros.status} </h1>
              </div>
          ))
      }
    </>
  )
}

export default Book