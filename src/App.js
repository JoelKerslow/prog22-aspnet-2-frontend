import "./App.css";
import React from "react";
import ProductContextProvider from "./contexts/ProductContext";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <ProductContextProvider>
      </ProductContextProvider>
    </Router>
  );
}

export default App;
