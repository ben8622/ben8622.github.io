import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/blogs" element={ <Blogs/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
