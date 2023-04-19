import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import PayPage from './Pages/PayPage/PayPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SliderPage from './Pages/SliderPage/SliderPage';
import Documentation from './Pages/DocumentationPage/Documentation';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Details from './Pages/Details/Details';


function App() {

  return (
    // <Routes>
    //   <Route path="/" element={
    //     <HomePage />
    //   } />
    //   <Route path="/Header" element={
    //     <HeaderPage />
    //   } />
    //   <Route path="/paypage" element={
    //     <PayPage />
    //   } />
    //   <Route path="/Regist" element={
    //     <RegistrationPage />
    //   } />
    //   <Route path="/Slider" element={
    //     <SliderPage />
    //   } />
    //   <Route path="/docum" element={
    //     <Documentation />
    //   } />
    //   <Route path='/contact' element={<ContactPage />} />
    //   <Route path="/about" element={<AboutPage/>} />
    // </Routes>
    <Details/>
  );
}

export default App;
