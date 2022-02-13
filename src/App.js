import { BrowserRouter, Routes,Route } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import Explore from "./pages/Explore"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SingUp from "./pages/SignUp"
import SingIn from "./pages/SignIn"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />

        {/*
             We do this if we want a component to only show if the user is auth to see it
             https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29769102#questions/16585786
          */}
          
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App