import "./Style.css";
import { items } from "../utils";

export default function Sale() {
  return (
    <div className="main">
      <div className="blue-flex">
        <div className="blue-box" />
        <h1>House For Sale</h1>
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
      </p>
      <br />
      <br />
      <div className="sale-display">
        {items.map((el) => {
          return (
            <div className="sale-card">
              <img src={el.img} height="200px" width="400px"></img>
              <h2>Apartment House</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the
              </p>
            </div>
          );
        })}
      </div>
      <br/><br/>
      <div className="sale-btn">
        <button className="btn">FIND MORE</button>
      </div>
    </div>
  );
}
