import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/Header/Header"
import UsersPage from './pages/UsersPage';
import SinglePost from './pages/Single-Post';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import UserProfile from "./components/UserProfile/UserProfile";
import PostPage from "./pages/PostPage";


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/' element={<HomePage/>} />
        <Route path='/Users' element= {<UsersPage/>} />
        <Route path='/users/:userId' element= {<UserProfile/>} />
        <Route path='/single-post' element= {<SinglePost/>} />
        <Route path='/Pages' element= {<Pages/>} />
        <Route path='/Contact' element= {<Contact/>} />
         <Route path="/single-post/:postId" element={<PostPage/>} />

       <Route path='*' element= {<NotFoundPage/>} />

      
      </Routes>
    </BrowserRouter>
  )
}

export default App




