import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter> */}
      <Router>
        <ProductContextProvider>


        </ProductContextProvider>
      </Router>
    </>
  );
}

export default App;
