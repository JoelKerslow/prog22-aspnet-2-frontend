import routingConfig from "./routing.json"
import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"
import UserContextProvider from "./contexts/UserContext"

function App() {
  const { routes, fallback } = routingConfig
  const routeElements = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={React.createElement(
        require(`./components/views/${route.element}`).default
      )}
    />
  ))

  const fallbackElement = React.createElement(
    require(`./components/views/${fallback.element}`).default
  )

  return (
    <BrowserRouter>
      <UserContextProvider>
        <AuthorizationContextProvider>
          <ProductContextProvider>
            <Routes>
              {routeElements}
              <Route path='*' element={fallbackElement} />
            </Routes>
          </ProductContextProvider>
        </AuthorizationContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
