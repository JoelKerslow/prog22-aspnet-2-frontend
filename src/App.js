import React from "react"
import "./App.css"
import RouteElements from "./RouteElements"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"
import UserContextProvider from "./contexts/UserContext"
import { WishlistProvider } from "./contexts/WishlistContext"

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
        <ProductContextProvider>
          <WishlistProvider>
            <RouteElements />
          </WishlistProvider>
        </ProductContextProvider>
      </AuthorizationContextProvider>
    </UserContextProvider>
  )
}

export default App
