
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'
import SearchProducts from './components/views/SearchProducts'
import Products from './components/views/Products'
import ProductContextProvider from './contexts/ProductContext'
import AuthorizationContextProvider from './contexts/AuthorizationContext'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'
import ProfilePage from './components/views/ProfilePage'
import ProductReviewForm from './components/views/ProductReviewForm'

function App() {
  return (
    <>

  <AuthorizationContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Verification" element={<VerificationCode />} />
            <Route path="/SearchProducts" element={<SearchProducts />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/ProductReview/:productId" element={<ProductReviewForm />} />
            <Route
              path="/Products/:type/:value"
              element={<Products />}
            />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
 </AuthorizationContextProvider>
    </>
  );
}

export default App;
