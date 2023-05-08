import "./App.css";
import ProductContextProvider from "./Contexts/ProductContext";

function App() {
  return (
    <>
    {/* //#region flyttas till egen fil?
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter> 
    //#endregion */}


      {/* <Router> */}
        <ProductContextProvider>


        </ProductContextProvider>
      {/* </Router> */}
    </>
  );
}

export default App;
