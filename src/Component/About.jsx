import './Style.css'
import img from '../images/about_img.png'
export default function About(){
    return (
    <>
        <div className="about" id="about">
          <div className="abt-img">
            <img src={img} alt="" width="500" height="300" />
          </div>
          <div className="abt-text">
            <div className="blue-flex">
              <div className="blue-box" />
              <h1>About Our Apartment</h1>
            </div>
            <br />
            <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alterative in
             some form,by injected humor,or randomised words</p>
            <br />
            <button className="btn">READ MORE</button>
          </div>
        </div>
    </>
)}

