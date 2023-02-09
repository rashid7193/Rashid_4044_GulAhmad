import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import {Routes,Route} from "react-router-dom"
import Slider from './Components/Slider';
function App() {
  return (
    
  <>
  <Navbar/>
     <Slider/>
     
{/*   
      <Routes>
     <Route path="/" element={<Home/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
     </Routes> */}
     
    </>
  );
}

export default App;