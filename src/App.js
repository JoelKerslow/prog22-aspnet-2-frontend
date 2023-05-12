import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'
import SearchProducts from './components/views/SearchProducts'
import Products from './components/views/Products'
import ProductContextProvider from './contexts/ProductContext'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'

function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Verification" element={<VerificationCode />} />
            <Route path="/SearchProducts" element={<SearchProducts />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route
              path="/Products/:type/:value"
              element={<Products />}
            />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </>
  )
}

export default App
