import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Component/Login';
import Navigation from './Component/Navigation';
import Registration from './Component/Registration'; 
import Logpage from './Component/Logpage';
import{BrowserRouter,Routes,Route}from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div> 
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
      <Route path="/logpage" element={<Logpage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
