import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'
import Search from './components/views/Search'
import Signin from './components/partials/Signin'
import Signup from './components/partials/Signup'
import Welcome from './components/views/Welcome'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/Verification" element={<VerificationCode />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>

      {/* <ProductContextProvider></ProductContextProvider> */}
    </>
  )
}

export default App
