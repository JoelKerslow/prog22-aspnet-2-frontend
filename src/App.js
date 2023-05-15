import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'

import SearchProducts from './components/views/SearchProducts'
import ProductSearchResults from './components/views/ProductSearchResults'
import ProductContextProvider from './contexts/ProductContext'
import CategoryResults from './components/views/CategoryResults'
<<<<<<< Updated upstream
import AuthorizationContextProvider from './contexts/AuthorizationContext'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'
import ProfilePage from './components/views/ProfilePage'
=======
import Signin from './components/partials/Signin'
import Signup from './components/partials/Signup'
import EditProfile from './components/partials/EditProfile'
>>>>>>> Stashed changes

function App() {
  return (
    <>

  <AuthorizationContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<EditProfile />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Verification" element={<VerificationCode />} />
            <Route path="/SearchProducts" element={<SearchProducts />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route
              path="/ProductSearchResults/:searchVal"
              element={<ProductSearchResults />}
            />
            <Route
              path="/CategoryResults/:departmentId/:categoryId"
              element={<CategoryResults />}
            />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
 </AuthorizationContextProvider>
    </>
  )
}

export default App
