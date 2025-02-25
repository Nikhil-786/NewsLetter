import { useState } from "react";
import success from "../public/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg";
import App from "./App.tsx";
const Thankyou = ({email}:{email:unknown}) => {
  const [complete, setcomplete] = useState(true);
  return (
    <>
      {complete ? (
        <div className="thankYou">
          <img src={success} alt="Success" id="succes" />
          <h1 id="heading">Thanks for Subscribing!</h1>
          <p id="pid">
            A confirmation email has been sent to <br />
            <span id="emailid">{typeof email==='string' ?email:''}</span>. Please open it an click <br />{" "}
            the button inside to confirm your subscriptions.{" "}
          </p>
          <button id="closeMessage" onClick={() => setcomplete(false)}>
            Dismiss message
          </button>
        </div>
      ) : (
        <App></App>
      )}
    </>
  );
};

export default Thankyou;
