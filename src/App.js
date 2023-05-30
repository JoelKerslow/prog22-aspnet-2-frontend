import React from "react"
import "./App.css"
import RouteElements from "./RouteElements"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"
import UserContextProvider from "./contexts/UserContext"
import CartContextProvider from "./contexts/CartContext"
import { GoogleOAuthProvider } from "@react-oauth/google";


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

  return (

    <UserContextProvider>
      <AuthorizationContextProvider>
        <CartContextProvider>
        <ProductContextProvider>
        <GoogleOAuthProvider clientId="459344649179-np0o2klbr29dmv02l0tbdmvh3grh2l4p.apps.googleusercontent.com">
          <RouteElements />
          </GoogleOAuthProvider>
        </ProductContextProvider>
        </CartContextProvider>
      </AuthorizationContextProvider>
    </UserContextProvider>
  )
}

export default App
