import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"
import UserContextProvider from "./contexts/UserContext"

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
