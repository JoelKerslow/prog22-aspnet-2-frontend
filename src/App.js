import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/views/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
