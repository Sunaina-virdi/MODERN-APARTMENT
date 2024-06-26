import './Style.css'
import map from '../images/google_maps.png'
import location from '../images/location.png'
import phone from '../images/phone.png'
import mail from '../images/mail.png'
import social from '../images/social.png'
export default function Contact(){
    return(
        <>
        {/* <!-- Contact section starts here --> */}
        <div className="contact" id="contact">
            <div className="blue-flex">
                <div className="blue-box"></div>
                <h1>Get In Touch</h1>
            </div><br/>
            <div className="contact-body">
                <div className="b-map">
                <a href="https://www.google.com/maps/@21.0680074,82.7525294,5z?entry=ttu"><img src={map} alt="" /></a>
                </div>
                <div className="b-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="number" placeholder="Phone Number" />
                    <textarea name="" id="" col="75" rows="8">Message...</textarea>
                    <button>SEND</button>
                </div>   
            </div>
        </div>
        <div className="footer">
            <div className="foot-flex">
                <div className="foot1">
                    <h2>About Apartment</h2>
                    <div className="icon">
                        <img className="invert-color" src={location} alt=""/>
                        <p>Address</p>
                    </div>
                    <div className="icon">
                        <img className="invert-color" src={phone} alt=""/>
                        <p>+01 1234567890</p>
                    </div> 
                    <div className="icon"> 
                        <img className="invert-color" src={mail} alt=""/>  
                        <p>demo@gmail.com</p>
                    </div>
                </div>
                <div className="foot1">
                    <h2>Information</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, Lorem ipsum dolor sit amet
                     Lorem ipsum dolor sit amet. </p>
                </div>
                <div className="foot1">
                    <h2>Useful Link</h2>
                    <p>There are many variations of passages of Lorem ispum available,but this Lorem ipsum dolor sit,
                     amet consectetur adipisicing elit. Molestias, incidunt.</p>
                </div>
                <div className="foot1">
                    <h2>Newsletter</h2>
                    <input type="email" class="email" placeholder="Enter Your Email" />
                    <button>SUBSCRIBE</button>
                    <img src={social} alt="" width="150px"/> 
                </div>
            </div>
            <div className="last-foot">
                <div className="last-line"></div>
                <h4>@2019All Rights Reserved. Free html Templates</h4>
            </div>
        </div>
        </>
    )
}