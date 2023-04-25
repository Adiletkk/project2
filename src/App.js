import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import PayPage from './Pages/PayPage/PayPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SliderPage from './Pages/SliderPage/SliderPage';
// import Documentation from './Pages/DocumentationPage/Documentation';
import Payend from './Pages/PayendPage/Payend';
import About from './Pages/About/About';
import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import TravelBlog from "./components/ComponentsPage5/TravelBlog/TravelBlog";
import Footer from './components/ComponentsPage1/Footer/Footer';
import TravelList from './components/ComponentPage2/TravelList/TravelList';



function App() {
  return (
    <div className='wrapper'> 
    <Routes> 
    <Route path="/" element={ 
      <HomePage/> 
    } /> 
    <Route path="/" element={ 
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
      <TravelList/> 
    }/> 
    <Route path="/payend" element={ 
      <Payend/> 
    }/> 
    <Route path="/about" element={ 
      <About/> }/>  
    </Routes>

{/* <Footer/>
<TravelBlog/> */}
</div>
  );
}

export default App;
