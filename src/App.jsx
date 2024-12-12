import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client"
import  {Routes, BrowserRouter, Route} from "react-router-dom"
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Nopage from './pages/Nopage'
import Blogs from './pages/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
