import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/views/Onboarding";
import VerificationCode from "./components/views/VerificationCode";
import Search from "./components/views/Search";
import Signin from "./components/views/Signin";
import Signup from "./components/views/Signup";
import Welcome from "./components/views/Welcome";
import Home from "./components/views/Home";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
	return (
		<>
			<ProductContextProvider>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/Signup" element={<Signup />} />
						<Route path="/Signin" element={<Signin />} />
						<Route path="/Onboarding" element={<Onboarding />} />
						<Route path="/Verification" element={<VerificationCode />} />
						<Route path="/Search" element={<Search />} />
					</Routes>
				</BrowserRouter>
			</ProductContextProvider>
		</>
	);
}

export default App;
