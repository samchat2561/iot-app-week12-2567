import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Contact from "./pages/contact"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Profile from "./pages/Profile"
import UserLayout from "./components/Layouts/UserLayout"
import DefaultLayout from "./components/Layouts/DefaultLayout"
import AdminLayout from "./components/Layouts/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import AddPost from "./pages/admin/AddPost"
import User from "./pages/admin/User"
import AllPost from "./pages/admin/AllPost"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path='/user' element={<UserLayout />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path='/dashboard' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="allposts" element={<AllPost />} />
            <Route path="users" element={<User />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App