import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Component/Login';
import Navigation from './Component/Navigation';
import Registration from './Component/Registration'; 
import Logpage from './Component/Logpage';
import Navbar from './Component/Navbar';
import Registerpage from './Component/Registerpage';
import About from './Component/About';
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Gallery from './Component/Gallery';
import Adminlogin from './Component/Adminlogin';
import Adminresetpwd from './Component/Adminresetpwd';
import Userlogin from './Component/Userlogin';
import Userreg from './Component/Userreg';
import Footer from './Component/Footer';
import Contactus from './Component/Contactus';

function App() {
  return (
    <BrowserRouter>
    <div> 
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/navigation" element={[<Navigation/>,<Footer/>]}/>
      <Route path="/logpage" element={[<Navbar/>,<Adminlogin/>,<Footer/>]}/>
      <Route path="/nav" element={<Navbar/>}/>
      <Route path="/reg" element={[<Navbar/>,<Registerpage/>]}/>
      <Route path="/about" element={[<Navbar/>,<About/>,<br></br>,<Footer/>]}/>
      <Route path="/gallery" element={[<Navbar/>,<Gallery/>,<Footer/>]}/>
      <Route path="/adminlog" element={[<Navbar/>,<Adminlogin/>,<Footer/>]}/>
      <Route path="/logpage" element={[<Navbar/>,<Logpage/>]}/>
      <Route path="/adminresetpwd" element={[<Navbar/>,<Adminresetpwd/>]}/>
      <Route path="/userlogin" element={[<Navbar/>,<Userlogin/>]}/>
      <Route path="/userreg" element={[<Navbar/>,<Userreg/>]}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/contactus" element={[<Navbar/>,<Contactus/>,<Footer/>]}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
