import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/Header/Header"
import BlogPage from './pages/BlogPage';
import SinglePost from './pages/Single-Post';
import Pages from './pages/Pages';
import Contact from './pages/Contact';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/Home' element={<HomePage/>} />
        <Route path='*' element= {<NotFoundPage/>} />
        <Route path='/Blog' element= {<BlogPage/>} />
        <Route path='/Single' element= {<SinglePost/>} />
        <Route path='/Pages' element= {<Pages/>} />
        <Route path='/Contact' element= {<Contact/>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
