import './Style.css'
import qimg1 from '../images/d-1.png'
import qimg2 from '../images/d-2.png'
export default function Quote(){
    return (
        <>
        <div className="quote">
            <div className="quote-text">
            <div className="blue-flex">
                <div className="blue-box" />
                <h1>Very Good Deal For House</h1>
            </div><br />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
             alternative in some form, by injected humour,or randomised words which don't look even slightly believable.</p>
            <br />
            <button className="btn">Get A Quote</button>
            </div>
            <div className="quote-img">
            <img className="q-img1" src={qimg1} alt="" />
            <img className="q-img2" src={qimg2} alt="" />
            </div>
        </div>
    </>
    )
}