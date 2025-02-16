import deskTopImg from "../public/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg";
import "./App.css";
import success from "../public/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [errorState, setError] = useState(true);
  function handlevaildation() {
    const validateResult: boolean = result(input);
    setError(validateResult);
  }

  function result(input: string) {
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const result = emailregex.test(input);
    return result;
  }

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
          <br />
          <label htmlFor="Email Address" id="emailLabel">Email address</label>
          <br />
          {errorState ? "" : <span id="error">Valid email Required</span>}
          <input
            type="text"
            name=""
            id="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button id="btn" onClick={handlevaildation}>
            Subscribe to montly newsletter
          </button>
        </div>
        <div className="secDiv">
          <img src={deskTopImg} alt="desktopImg" id="emailImage" />
        </div>
      </div>
    </div>
  );
}

export default App;
