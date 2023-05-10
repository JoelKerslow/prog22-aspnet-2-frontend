import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Views/Welcome'
import Onboarding from './Components/Views/Onboarding'
import VerificationCode from './Components/Views/VerificationCode'
import Search from './Components/Views/Search'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
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
