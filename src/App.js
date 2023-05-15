import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Onboarding from './components/views/Onboarding'
import VerificationCode from './components/views/VerificationCode'
import Search from './components/views/Search'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'
import Welcome from './components/views/Welcome'
import AuthorizationContextProvider from './contexts/AuthorizationContext'
import ProfilePage from './components/views/ProfilePage'


function App() {
  return (
    <>
    <AuthorizationContextProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Verification" element={<VerificationCode />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
    </AuthorizationContextProvider>
      

      {/* <ProductContextProvider></ProductContextProvider> */}
    </>
  )
}

export default App
