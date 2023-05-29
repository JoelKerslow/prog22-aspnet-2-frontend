import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"
import UserContextProvider from "./contexts/UserContext"
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import Home from './components/views/Home'
import VerificationCode from './components/views/VerificationCode'
import SearchProducts from './components/views/SearchProducts'
import Signup from './components/views/Signup'
import Signin from './components/views/Signin'
import ProfilePage from './components/views/ProfilePage'
import EditProfile from './components/views/EditProfile'
import ProductReviewForm from './components/views/ProductReviewForm'
import OrderReviewForm from './components/views/OrderReviewForm'
import Products from './components/views/Products'
import PaymentMethod from './components/views/PaymentMethod'
import ProductReview from './components/views/ProductReview'
import AddCreditCard from "./components/views/AddCreditCard"



function App() {
  // const { routes, fallback } = routingConfig
  // const routeElements = routes.map((route) => (
  //   <Route
  //     key={route.path}
  //     path={route.path}
  //     element={React.createElement(
  //       require(`./components/views/${route.element}`).default
  //     )}
  //   />
  // ))

  // const fallbackElement = React.createElement(
  //   require(`./components/views/${fallback.element}`).default
  // )

  // return (
  //   <BrowserRouter>
  //     <UserContextProvider>
  //       <AuthorizationContextProvider>
  //         <ProductContextProvider>
  //           <Routes>
  //             {routeElements}
  //             <Route path='*' element={fallbackElement} />
  //           </Routes>
  //         </ProductContextProvider>
  //       </AuthorizationContextProvider>
  //     </UserContextProvider>
  //   </BrowserRouter>
  // )


  return (
    <BrowserRouter>
      <UserContextProvider>
        <AuthorizationContextProvider>
          <ProductContextProvider>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Onboarding" element={<Onboarding />} />
              <Route path="/Verification" element={<VerificationCode />} />
              <Route path="/SearchProducts" element={<SearchProducts />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<ProfilePage />} />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route path="/AddCreditcard" element={<AddCreditCard />} />
              <Route
                path="/ProductReview/:productId"
                element={<ProductReviewForm />}
              />
              <Route
                path="/OrderReview/:orderId"
                element={<OrderReviewForm />}
              />
              <Route
                path="/Products/:type/:value"
                element={<Products />}
              />
              <Route
                path="/Profile/PaymentMethods"
                element={<PaymentMethod />}
              />
              <Route
                path="/ProductSubmitedReviews/:productId"
                element={<ProductReview />}
              />
              <Route path="/Home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </ProductContextProvider>
        </AuthorizationContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App
