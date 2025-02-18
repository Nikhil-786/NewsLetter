import success from '../public/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg'

const Thankyou = ({ email }) => {
  return (
    <div className="thankYou">
        <img src={success} alt="Success" id='succes' />
      <h1 id="heading">Thanks for Subscribing!</h1>
      <p  id='pid'>
        A confirmation email has been sent to <br />
        <span id='emailid'>{email}</span>. Please open it an click <br /> the button inside to confirm
        your subscriptions.{" "}
      </p>
      <button id="closeMessage">Dismiss message</button>
    </div>
  );
};

export default Thankyou;
