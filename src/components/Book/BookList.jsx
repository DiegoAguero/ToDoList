import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Book from './Book'
import BookAdd from './BookAdd'
function BookList() {
  const [book, setBook] = useState()
  const [showVisible, setShowVisible] = useState(false)

  const handleOnClose = ()=> setShowVisible(false)
  useEffect(()=>{
    const books = JSON.parse(localStorage.getItem('books'))
    if(books) setBook(books); 
  }, [book])


  return (
      <>
        {/* <div className='flex p-2 justify-center'>
          <form onSubmit={handleSubmit} className='self-center border-2 border-black p-3'>
              <label htmlFor="title">
                  Title: 
                  <input type="text" name='title' value={title} className='border border-slate-300 rounded-md block w-full' onChange={(e)=>setTitle(e.target.value)} required/>
              </label><br></br>
              <label htmlFor="author">
                  Author: 
                  <input type="text" name='author' value={author} className='border border-slate-300 rounded-md block w-full' onChange={(e)=>setAuthor(e.target.value)} required/>
              </label><br></br>
              <label htmlFor="image">
                  Image: 
                  <input type="text" name='image' value={image} className='border border-slate-300 rounded-md block w-full' onChange={(e)=>setImage(e.target.value)} required/>
              </label><br></br>
              <button type='submit' className='mr-2 px-3 rounded-full bg-sky-500/100 hover:bg-sky-600'>Create Book</button>
              <button className='px-3 rounded-full bg-sky-500/100 hover:bg-sky-600'> <Link to='/books'> Book Status</Link></button>
          </form>
        </div> */}
        <button className='bg-black float-right mr-20 mt-10' onClick={()=> setShowVisible(true)}>+</button>
        <BookAdd onClose={handleOnClose} visible={showVisible}/>
        <div className='flex flex-col justify-between items-center p-4'>
          {
          book?.map((books)=>(
              <Book {...books} key={books.id}/>
            ))
          }
        </div>
      </>
  )
}

export default BookList