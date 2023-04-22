
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
import "./App.css";
import TravelList from "./components/ComponentPage2/TravelList/TravelList";
import Explore from "./components/ComponentsPage1/ExploreDifferent/Explore";
import FastWay from "./components/ComponentsPage1/FastestWay/FastWay";
import CardFeature from "./components/ComponentsPage1/FeaturedTours/Cards/CardFeatureTour";
import FeaturTour from "./components/ComponentsPage1/FeaturedTours/FeaturTour";
import Footer from "./components/ComponentsPage1/Footer/Footer"
import LatestPost from "./components/ComponentsPage1/LatestPosts/LatePost";
import OurFavorite from "./components/ComponentsPage1/OurFavoriteDestinations/OurFavorite";
import Thailand from "./components/ComponentsPage1/ThailandTour/Thailand";
import TourCityCard from "./components/ComponentsPage1/ToursByCity/Cards/TourCityCard";
import TourCity from "./components/ComponentsPage1/ToursByCity/TourCity";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import TravelBlog from "./components/ComponentsPage5/TravelBlog/TravelBlog";

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
    <div>
<Footer/>
<TravelBlog/>

      
    </div>
    // <Routes>
    //   {/* <Route path="/" element={<HomePage />} />
    //   <Route path="/Header" element={<HeaderPage />} />
    //   <Route path="/paypage" element={<PayPage />} />
    //   <Route path="/Regist" element={<RegistrationPage />} />
    //   <Route path="/Slider" element={<SliderPage />} />
    //   <Route path="/docum" element={<Documentation />} />
    //   <Route path="/contact" element={<ContactPage />} />
    //   <Route path="/about" element={<AboutPage />} /> */}
    // {/* </Routes> */}
  );
}

export default App;
