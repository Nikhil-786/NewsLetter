import deskTopImg from "../public/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg";
import "./App.css";
import success from "../public/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg";
function App() {
  return (
    <div className="backgroundContainer">
      <div className="mainDiv">
        <div className="firstDiv">
          <h1>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving montly updates on:</p>
          <label htmlFor="" className="cl1">
            <img src={success} alt="success" className="success" />
            Product discovery and building what matters
          </label>
          <br />
          <label htmlFor="" className="cl1">
            <img src={success} alt="success" className="success" />
            Measuring to ensure updates are a success
          </label>
          <br />
          <label htmlFor="" className="cl1">
            <img src={success} alt="success" className="success" />
            And much more!
          </label>
          <label htmlFor="Email Address">Email address</label>
          <br />
          <input type="text" name="" id="email" />
          <br />
          <button id="btn">Subscribe to montly newsletter</button>
        </div>
        <div className="secDiv">
          <img src={deskTopImg} alt="desktopImg"  id="emailImage"/> 
        </div>
      </div>
    </div>
  );
}

export default App;
