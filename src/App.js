import "./App.css";
import React from "react";
import ProductContextProvider from "./Contexts/ProductContext";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./Components/partials/ProductCard";

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}/> */}
    //   </Routes>
    // </BrowserRouter>
        <Router>
          <ProductContextProvider>

          </ProductContextProvider>
        </Router>

  );
}

export default App;
