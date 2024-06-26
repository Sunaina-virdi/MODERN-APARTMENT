import "./Style.css";
import { data } from "../utils";

export default function Price() {
  return (
    <>
      <div className="pricing">
        <div className="blue-flex">
          <div className="blue-box" />
          <h1>Our Pricing</h1>
        </div>
        <br />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the
        </p>
        <br /><br />
        <div className="price-display">
          {data.map((el) => {
            return (
              <div className="buy-now">
                <div className="basic">
                  <div className="b-heading">
                    <h2>{el.text1}</h2>
                    <h3>{el.text2}</h3>
                  </div>
                  <div className="b-body">
                    <h1>{el.text3}</h1>
                    <br />
                    <div className="white-box"></div>
                    <br />
                    <p>{el.text4}</p>
                  </div>
                </div>
                <button class="buy-btn">Buy Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
