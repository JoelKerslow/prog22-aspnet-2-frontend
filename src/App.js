import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'
import Search from './components/views/Search'
import ProductResults from './components/views/ProductResults'
import ProductContextProvider from './contexts/ProductContext'

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
