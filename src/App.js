import "./App.css";
import React from "react";
import ProductContextProvider from "./contexts/ProductContext";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./components/partials/ProductCard";

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}/> */}
    //   </Routes>
    // </BrowserRouter>
        <Router>
          <ProductContextProvider>
              <ProductCard/>
          </ProductContextProvider>
        </Router>

  );
}

export default App;
