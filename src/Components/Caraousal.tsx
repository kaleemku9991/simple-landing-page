import react from "react";
import Slider from "react-elastic-carousel";
import Item from "./Item";
import "./Caraousal.css";
import section2pic1 from '../images/section2-pic2.png';
import section2pic2 from '../images/section2-pic3.png';
import section2pic3 from '../images/section2-pic4.png';

// import "./Caraousal.scss";
// import style from './mystyle.module.css'; 
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Caraousal() {

  return (
    <div className="carousalmain">
     <h1 style={{ textAlign: "center",padding:"20px",color:"white",marginTop:"5px" }}>Here Our Team Members</h1>
      <div className="caraousal">
        <Slider breakPoints={breakPoints} className="slider">
          <Item className="item"><img src={section2pic1}/></Item>
          <Item className="item"><img src={section2pic2}/></Item>
          <Item className="item"><img src={section2pic3}/></Item>
          <Item className="item"><img src={section2pic1}/></Item>
          <Item className="item"><img src={section2pic2}/></Item>
          <Item className="item"><img src={section2pic3}/></Item>
          <Item className="item"><img src={section2pic1}/></Item>
          <Item className="item"><img src={section2pic2}/></Item>
        </Slider>
      </div>
    </div>
  );
}

export default Caraousal;
