// import logo from './logo.svg';
import './App.css';
import BookAdd from './components/Book/BookAdd'
import BookList from './components/Book/BookList'

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
          <Route path='/books' element={<BookList/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
