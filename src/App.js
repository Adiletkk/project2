import './App.css';
import TravelList from './components/ComponentPage2/TravelList/TravelList';
import Explore from './components/ComponentsPage1/ExploreDifferent/Explore';
import FastWay from './components/ComponentsPage1/FastestWay/FastWay';
import CardFeature from './components/ComponentsPage1/FeaturedTours/Cards/CardFeatureTour';
import FeaturTour from './components/ComponentsPage1/FeaturedTours/FeaturTour';
import Footer from './components/ComponentsPage1/Footer/Footer';
import LatestPost from './components/ComponentsPage1/LatestPosts/LatePost';
import OurFavorite from './components/ComponentsPage1/OurFavoriteDestinations/OurFavorite';
import Thailand from './components/ComponentsPage1/ThailandTour/Thailand';
import TourCityCard from './components/ComponentsPage1/ToursByCity/Cards/TourCityCard';
import TourCity from './components/ComponentsPage1/ToursByCity/TourCity';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";



function App() {
  return (
    <div className="App">
      {/* <Thailand/>
      <Explore/>
      <FastWay/>
      <OurFavorite/>
      <FeaturTour/>
      <TourCity/>
    <LatestPost/>
    <Footer/> */}
    <TravelList/>
    </div>
  );
}

export default App;
