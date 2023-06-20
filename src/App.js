import logo from './logo.svg';
import './App.css';
import BookAdd from './components/Book/BookAdd'
import Book from './components/Book/Book'

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<BookAdd/>}/>
          <Route path='/books' element={<Book/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
