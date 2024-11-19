import './Style.css'
import img from '../images/hamburger.png'
export default function Nav(){
    return (
        <>
        {/* NAV SECTION STARTS HERE */}
        <div className="nav" id="nav">
          <div className="nav-bar">
            <div className="nav-teaser">
              <a href='#nav'><h2>LocaLiving</h2></a>
            </div>
            <div className="nav-link">
              <a href="#about">ABOUT</a>
              <a href="#sale">SALE</a>
              <a href="#price">PRICING</a>
              <a href="#contact">CONTACT</a>
              {/* <img src={img} className="invert-color" alt="icon" height='25' width='30'/> */}
            </div>
          </div>
          <div className="topic">
            <h1 id="dark">Modern</h1>
            <h1>Apartment</h1>
            <h1>House</h1><br />
            <p>It is a long established fact that a reader will be distracted by the readable content of</p>
            <br />
            <button className="btn">READ MORE</button>
          </div>
        </div>
        {/*  INPUT SECTION STARTS HERE */}
        <div className="input">
        <div>
          <input type="text" placeholder="Search Your Categories" />
        </div>
        <div>
          <input type="text" placeholder="Location" />
        </div>
        <div>
          <button>SEARCH</button>
        </div>
        </div> 
    </>
    )
}
