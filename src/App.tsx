import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/blogs" element={ <Blogs/> }/>
          <Route path="/blogs/:slug" element={ <BlogPost/> }/>
          <Route path="*" element={ <NotFound/> }/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
