import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/Header/Header"
import UsersPage from './pages/UsersPage';
import SinglePost from './pages/Single-Post';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import PostPage from "./pages/PostPage";
import UserPage from './pages/UserPage'
import TagPage from "./pages/TagPage";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/' element={<HomePage/>} />
        <Route path='/Users' element= {<UsersPage/>} />
        <Route path='/users/:userId' element= {<UserPage/>} />

        <Route path='/single-post' element= {<SinglePost/>} />
        <Route path='/Pages' element= {<Pages/>} />
        <Route path='/Contact' element= {<Contact/>} />
         <Route path="/single-post/:postId" element={<PostPage/>} />

         <Route path ='/single-post/tag/:tagName' element={<TagPage/>} />

       <Route path='*' element= {<NotFoundPage/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App




