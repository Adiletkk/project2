import ColorCards from "./ColorCards/ColorCards";
import Top from "./TopCards/Top";
import styles from "./TopHighlights.module.scss";
import bg1 from "./ColorCards/images/bg1.svg"
import bg2 from "./ColorCards/images/bg2.svg"
import bg3 from "./ColorCards/images/bg3.svg"
import bg4 from "./ColorCards/images/bg4.svg"
import BG1 from "./BigImages/BG1.svg"
import BG2 from "./BigImages/BG2.svg"
import BG3 from "./BigImages/BG3.svg"
import BG4 from "./BigImages/BG4.svg"
import BG5 from "./BigImages/BG5.svg"
import BG6 from "./BigImages/BG6.svg"
import BG7 from "./BigImages/BG7.svg"
import BG8 from "./BigImages/BG8.svg"
import avatar1 from "./avatar/avatar1.svg"
import avatar2 from "./avatar/avatar2.svg"
import avatar3 from "./avatar/avatar3.svg"
import avatar4 from "./avatar/avatar4.svg"
import avatar5 from "./avatar/avatar5.svg"
import avatar6 from "./avatar/avatar6.svg"
import avatar7 from "./avatar/avatar7.svg"
import avatar8 from "./avatar/avatar8.svg"
import Footer from "../../ComponentsPage1/Footer/Footer";
import Slider from "react-slick";
import Left from "../../ComponentPage2/TravelList/buttonimg/iconbase.svg"
import Right from "../../ComponentPage2/TravelList/BgImg/OVERLAYCOLOR9.svg"
import Glob from "../TopHighlights/glob/glob.css"
function TopHighlights() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.nextArrow}
        style={{ 
        backgroundImage:{Left},
        width:"12px",
        display: "flex",
   }}
        onClick={onClick}
      ><img src={Right} alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.PrevArrow}
       
          onClick={onClick}
      >
<img src={Left} alt="" />

      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className={styles.slick-dots}
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
          borderRadius: "20px",
          padding: "10px",
          marginLeft: "72px",
        }}
      >
        <ul  className={styles.dots}  style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={styles.hoverPagin}
        style={{
          width: "40px",
          height:"40px",
          paddingTop:"10px",
          color: "black",
          border: "none",
          borderRadius: "20px",
          gap: "6px"
        
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <>
    <h4>Today's Top Highlights</h4>
    <section className={styles.TopHighlights}>
    <Slider  className={styles.Slider}
            {...settings}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}>
      <div className={styles.Left}>
       <div className={styles.flex} >
        <Top
        ImageCardFeature={BG1}
        avatar={avatar1}
        title="The 7 Most Successful Event Companies In Region"
        />
        <Top 
          ImageCardFeature={BG2}
          avatar={avatar2}
          title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG3}
          avatar={avatar3}
          title="Knowing These 7 Secrets Will Make Your Event Look Amazing"
        />
        <Top 
          ImageCardFeature={BG4}
          avatar={avatar4}
          title="Believing These 7 Myths About Event Keeps You From Growing"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG5}
          avatar={avatar5}
          title="The Next 7 Things You Should Do For Event Success"
        />
        <Top 
          ImageCardFeature={BG6}
          avatar={avatar6}
          title="How 7 Things Will Change The Way You Approach Event"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG7}
          avatar={avatar7}
          title="Take Advantage Of Event - Read These 7 Tips"
        />
        <Top 
          ImageCardFeature={BG8}
          avatar={avatar8}
          title="Event On A Budget: 7 Tips From The Great Depression"
        
        />
        </div>
        
      </div>
      <div className={styles.Left}>
       <div className={styles.flex} >
        <Top
        ImageCardFeature={BG1}
        avatar={avatar1}
        title="The 7 Most Successful Event Companies In Region"
        />
        <Top 
          ImageCardFeature={BG2}
          avatar={avatar2}
          title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG3}
          avatar={avatar3}
          title="Knowing These 7 Secrets Will Make Your Event Look Amazing"
        />
        <Top 
          ImageCardFeature={BG4}
          avatar={avatar4}
          title="Believing These 7 Myths About Event Keeps You From Growing"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG5}
          avatar={avatar5}
          title="The Next 7 Things You Should Do For Event Success"
        />
        <Top 
          ImageCardFeature={BG6}
          avatar={avatar6}
          title="How 7 Things Will Change The Way You Approach Event"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG7}
          avatar={avatar7}
          title="Take Advantage Of Event - Read These 7 Tips"
        />
        <Top 
          ImageCardFeature={BG8}
          avatar={avatar8}
          title="Event On A Budget: 7 Tips From The Great Depression"
        
        />
        </div>
        
      </div>
      <div className={styles.Left}>
       <div className={styles.flex} >
        <Top
        ImageCardFeature={BG1}
        avatar={avatar1}
        title="The 7 Most Successful Event Companies In Region"
        />
        <Top 
          ImageCardFeature={BG2}
          avatar={avatar2}
          title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG3}
          avatar={avatar3}
          title="Knowing These 7 Secrets Will Make Your Event Look Amazing"
        />
        <Top 
          ImageCardFeature={BG4}
          avatar={avatar4}
          title="Believing These 7 Myths About Event Keeps You From Growing"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG5}
          avatar={avatar5}
          title="The Next 7 Things You Should Do For Event Success"
        />
        <Top 
          ImageCardFeature={BG6}
          avatar={avatar6}
          title="How 7 Things Will Change The Way You Approach Event"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG7}
          avatar={avatar7}
          title="Take Advantage Of Event - Read These 7 Tips"
        />
        <Top 
          ImageCardFeature={BG8}
          avatar={avatar8}
          title="Event On A Budget: 7 Tips From The Great Depression"
        
        />
        </div>
        
      </div>
      <div className={styles.Left}>
       <div className={styles.flex} >
        <Top
        ImageCardFeature={BG1}
        avatar={avatar1}
        title="The 7 Most Successful Event Companies In Region"
        />
        <Top 
          ImageCardFeature={BG2}
          avatar={avatar2}
          title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG3}
          avatar={avatar3}
          title="Knowing These 7 Secrets Will Make Your Event Look Amazing"
        />
        <Top 
          ImageCardFeature={BG4}
          avatar={avatar4}
          title="Believing These 7 Myths About Event Keeps You From Growing"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG5}
          avatar={avatar5}
          title="The Next 7 Things You Should Do For Event Success"
        />
        <Top 
          ImageCardFeature={BG6}
          avatar={avatar6}
          title="How 7 Things Will Change The Way You Approach Event"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG7}
          avatar={avatar7}
          title="Take Advantage Of Event - Read These 7 Tips"
        />
        <Top 
          ImageCardFeature={BG8}
          avatar={avatar8}
          title="Event On A Budget: 7 Tips From The Great Depression"
        
        />
        </div>
        
      </div>
      <div className={styles.Left}>
       <div className={styles.flex} >
        <Top
        ImageCardFeature={BG1}
        avatar={avatar1}
        title="The 7 Most Successful Event Companies In Region"
        />
        <Top 
          ImageCardFeature={BG2}
          avatar={avatar2}
          title="Think Your Event Is Safe? 7 Ways You Can Lose It Today"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG3}
          avatar={avatar3}
          title="Knowing These 7 Secrets Will Make Your Event Look Amazing"
        />
        <Top 
          ImageCardFeature={BG4}
          avatar={avatar4}
          title="Believing These 7 Myths About Event Keeps You From Growing"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG5}
          avatar={avatar5}
          title="The Next 7 Things You Should Do For Event Success"
        />
        <Top 
          ImageCardFeature={BG6}
          avatar={avatar6}
          title="How 7 Things Will Change The Way You Approach Event"
        />
        </div>
        <div className={styles.flex} >
        <Top 
          ImageCardFeature={BG7}
          avatar={avatar7}
          title="Take Advantage Of Event - Read These 7 Tips"
        />
        <Top 
          ImageCardFeature={BG8}
          avatar={avatar8}
          title="Event On A Budget: 7 Tips From The Great Depression"
        
        />
        </div>
        
      </div>
     
      </Slider>
      <div className={styles.Right}>
        <div className={styles.Search}>
          <input type="text" placeholder="Search..." />
        </div>
        <ul>
          <h1>Categories</h1>
          <li>Marketing</li>
          <li>Community</li>
          <li>Tutorials</li>
          <li>Business</li>
          <li>Management</li>
        </ul>
        <div className={styles.RecentPosts}>
          <ColorCards
          ChangeParagraph="Understanding color theory: the color wheel and finding..."
          title="November 7, 2017"
          ImgAlt={bg1}
            />
          <ColorCards 
             ChangeParagraph="How to design a product that can grow itself 10x in year"
             title="October 24, 2018"
             ImgAlt={bg2}
          
          />
          <ColorCards
             ChangeParagraph="Any mechanical keyboard enthusiasts in design?"
             title="November 28, 2015"
             ImgAlt={bg3}
          />
          <ColorCards 
           ChangeParagraph="Yo Reddit! What’s a small thing that anyone can do at nearly..."
           title="May 29, 2017"
           ImgAlt={bg4}
          />
        </div>
        <div className={styles.PopulareTags}>
          <h1>Popular Tags</h1>
          <button>Marketing</button>
          <button>Development</button>
          <button>Banking</button>
          <button>HR & Recruting</button>
          <button>Design</button>
          <button>Management</button>
          <button>Business</button>
          <button>Community</button>
          <button>Tutorials</button>
        </div>
        <div className={styles.Advertisement}>
          <h2>Advertisement</h2>
          <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
          <button>Go Now</button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
export default TopHighlights;
