import React from "react";
import "./App.css";
import RouteElements from "./RouteElements";
import ProductContextProvider from "./contexts/ProductContext";
import AuthorizationContextProvider from "./contexts/AuthorizationContext";
import UserContextProvider from "./contexts/UserContext";
import CartContextProvider from "./contexts/CartContext";
import Signin from "./components/views/Signin"; // Import your Signin view component
import SocialMedia from "./components/partials/generalPartials/SocialMedia"; // Import your SocialMedia component

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
            <RouteElements />
            <Signin /> 
            <SocialMedia />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthorizationContextProvider>
    </UserContextProvider>
  );
}

export default App;
