
import routingConfig from "./routing.json"
import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContextProvider from "./contexts/ProductContext"
import AuthorizationContextProvider from "./contexts/AuthorizationContext"

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
    <AuthorizationContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            {routeElements}
            <Route path='*' element={fallbackElement} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </AuthorizationContextProvider>
  )
}

export default App
