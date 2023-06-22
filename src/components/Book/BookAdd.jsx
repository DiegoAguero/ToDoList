import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import BookList from './BookList'

const initLocalStorage = JSON.parse(localStorage.getItem('books')) || [];
function BookAdd({visible, onClose}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [books, setBooks] = useState(initLocalStorage)

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()
        setBooks([
            ...books,
            {id: parseInt(books.length)+ 1, title, author, image, status: 'pending'}
        ])

    }
    function handleOnClose(e){
        if(e.target.id === 'close') onClose()
    }

    if(!visible) return null
  return (
    <div onClick={handleOnClose} id='close' className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex p-2 justify-center'>
        
        <form onSubmit={handleSubmit} className='self-center border-2 border-black p-3 bg-white rounded'>
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
    </div>
  )
}

export default BookAdd