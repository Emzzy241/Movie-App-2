import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { MovieProvider } from './contexts/MovieContext.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  const movieNumber = 30

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>


  )
}


export default App
