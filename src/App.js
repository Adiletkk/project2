import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import PayPage from './Pages/PayPage/PayPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SliderPage from './Pages/SliderPage/SliderPage';
import Documentation from './Pages/DocumentationPage/Documentation';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import WeWork from './components/WeWork/WeWork';
import Drop from './components/Drop/Drop';
import AboutUs from './components/AboutUs/AboutUs';
import Maecenas from './components/Maecenas/Maecenas';
import OurMission from './components/OurMission/OurMission';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/ComponentsPage1/Footer/Footer';


function App() {

  return (

    <div >
    <Routes> 
    <Route path="/" element={ 
      <HomePage/> 
    } /> 
    <Route path="/Header" element={ 
      <HeaderPage/> 
    }/> 
    <Route path="/paypage" element={ 
      <PayPage/> 
    }/> 
    <Route path="/Regist" element={ 
      <RegistrationPage/> 
    }/> 
    <Route path="/Slider" element={ 
      <SliderPage/> 
    }/> 
     <Route path="/docum" element={ 
      <Documentation/> 
    }/> 
    {/* <Route path="/contact" element={ 
      <Contact/> 
    }/> 
    <Route path="/about" element={ 
      <About/> 
    }/>  */}
    </Routes>
    </div>
  );
}

export default App;
