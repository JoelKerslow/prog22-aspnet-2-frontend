import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Views/Home'
import ProductContextProvider from './Contexts/ProductContext'
import SignInView from "./views/SignInView";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignInView />} />
				</Routes>
			</BrowserRouter>

			{/* <Router> */}
			<ProductContextProvider></ProductContextProvider>
			{/* </Router> */}
		</>
	)
}

export default App
