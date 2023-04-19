import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import PayPage from './Pages/PayPage/PayPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SliderPage from './Pages/SliderPage/SliderPage';
import Documentation from './Pages/DocumentationPage/Documentation';
<<<<<<< HEAD
import Payend from './Pages/PayendPage/Payend';
import About from './Pages/About/About';
=======
>>>>>>> 7352afa95bae48f8c2564d10ca891cd781d36dae


function App() {

  return (
<<<<<<< HEAD

    <div >
=======
>>>>>>> 7352afa95bae48f8c2564d10ca891cd781d36dae
    <Routes> 
    <Route path="/" element={ 
      <HomePage/> 
    } /> 
    <Route path="/header" element={ 
      <HeaderPage/> 
    }/> 
    <Route path="/paypage" element={ 
      <PayPage/> 
    }/> 
    <Route path="/regist" element={ 
      <RegistrationPage/> 
    }/> 
    <Route path="/Slider" element={ 
      <SliderPage/> 
    }/> 
     <Route path="/docum" element={ 
      <Documentation/> 
    }/> 
    <Route path="/payend" element={ 
      <Payend/> 
    }/> 
    <Route path="/about" element={ 
      <About/> }/>  
    </Routes>
<<<<<<< HEAD
    </div>
=======
>>>>>>> 7352afa95bae48f8c2564d10ca891cd781d36dae
  );
}

export default App;
