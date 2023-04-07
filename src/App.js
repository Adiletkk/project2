import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import WeWork from './components/WeWork/WeWork';
import Drop from './components/Drop/Drop';
import AboutUs from './components/AboutUs/AboutUs';
import Maecenas from './components/Maecenas/Maecenas';
import OurMission from './components/OurMission/OurMission';
import OurTeam from './components/OurTeam/OurTeam';
=======
import Footer from './components/ComponentsPage1/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <WeWork/>
      <Card/>
      <Drop/> */}
      <AboutUs/>
      <Maecenas/>
      <OurMission/>
      <OurTeam/>
        <Footer/>
    </div>
  );
}

export default App;
