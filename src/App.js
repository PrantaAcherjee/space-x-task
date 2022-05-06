 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header></Header>
      <Routes>
       <Route path="/" element={<Home/>} />       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
