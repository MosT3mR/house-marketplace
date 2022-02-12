import { BrowserRouter, Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
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
        <Route path="/profile" element={<SingIn />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
    </>
  )
}

export default App