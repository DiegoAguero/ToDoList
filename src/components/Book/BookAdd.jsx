import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import BookList from './BookList'

const initLocalStorage = JSON.parse(localStorage.getItem('books')) || [];
function BookAdd() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [books, setBooks] = useState(initLocalStorage)


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()
        setBooks([
            ...books,
            {id: parseInt(books.length)+ 1, title, author, status: 'pending'}
        ])
        // books.push({
        //     id: parseInt(books.length)+1,
        //     title,
        //     author,
        //     status: 'pending'
        // })
    }
    // function handleChange(e){
    //     setTitle(e.target.title)
    //     setAuthor(e.target.author)
    //     setBooks({
    //         ...books,
    //         [title]: author
    //     })
    // }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                Title: 
                <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}  required/>
                    {/* <input type="text" name='title' value={title} onChange={handleChange}  required/> */}
            </label><br></br>
            <label htmlFor="author">
                Author: 
                <input type="text" name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
                    {/* <input type="text" name='author' value={author} onChange={handleChange} required/> */}
            </label><br></br>
            <button type='submit'> Enviar Datos</button>
        </form>
        <button> <Link to='/books'> Leer libros</Link></button>
        <ul>
            {   
                books.length > 1?
                books.map(books=> <BookList libros={books}/>)
                :
                console.log("esperando a maria")
                // books.map((book =>{
                //     console.log(book)
                //     // <Book {...book}/>
                // }))
            }
        </ul>
    </div>
  )
}

export default BookAdd