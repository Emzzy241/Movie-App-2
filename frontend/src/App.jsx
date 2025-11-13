import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/Navbar'

function App() {
  const movieNumber = 30

  return (
    <div>
      <NavBar />
   <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/favorites' element={<Favorites />}/>
    </Routes>
   </main>

    </div>
  )
}


export default App
