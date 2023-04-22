import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import PayPage from './Pages/PayPage/PayPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SliderPage from './Pages/SliderPage/SliderPage';
import Documentation from './Pages/DocumentationPage/Documentation';

import Payend from './Pages/PayendPage/Payend';
import About from './Pages/About/About';

function App() {

  return (
    <div className='wrapper'> 
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
    </div>
  );
}

export default App;
