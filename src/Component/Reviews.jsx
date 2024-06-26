import './Style.css'
import arrow from '../images/copy_2.png'
import arrow1 from '../images/image.png'
import man from '../images/rectangle_33.jpg'
export default function Reviews() {
  return (
    <>
      <div className="main1">
        <div className="blue-flex">
          <div className="blue-box" />
          <h1>What is Says Our Customer</h1>
        </div>
        <div className="main3">
          <div className="main4">
            <div className='a-img'>
              <img src={arrow1} alt="" height="20" width="15" />
            </div>
            <div className="solid">
            </div>
            <div className="man">
              <img src={man} alt="" />
            </div>
            <div className="text">
              <h1 className="h11">Majority</h1>
              <p className="para">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
            </div>
            <div className='a-img'>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
