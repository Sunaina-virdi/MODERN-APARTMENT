import './Style.css'
import { card } from '../utils' 

export default function Choose(){
    return (
    <>
        {/* CHOOSE SECTION STARTS HERE */}
        <div className="choose">
            <div className="blue-flex">
                <div className="choose-box"></div>
                <h1>Why Choose Us</h1>
            </div>
            <div className="choose-content">
                {card.map((el) => {
                    return (
                        <div className="card1">
                            <img className="invert-color" src={el.img} width="60px" height="65px" alt=""/>
                            <h1>{el.text1}</h1>
                            <h3>{el.text2}</h3>
                        </div>
                    );
                })}
            </div><br/><br/>
            <div className='choose-btn'>
                <button className='btn'>Get A Quote</button>
            </div>
        </div> 
    </>
    )
}