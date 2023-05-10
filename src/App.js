import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Views/Welcome'
import Onboarding from './Components/Views/Onboarding'
import VerificationCode from './Components/Views/VerificationCode'
import Search from './Components/Views/Search'
import ProductResults from './Components/Views/ProductResults'
import ProductContextProvider from './Contexts/ProductContext'

function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Verification" element={<VerificationCode />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/ProductResults/:searchVal" element={<ProductResults />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </>
  )
}

export default App
