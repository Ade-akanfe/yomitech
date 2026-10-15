import Envelope from "@/assets/icons/envelope-regular";
import Location from "@/assets/icons/location-dot-solid";
import Phone from "@/assets/icons/phone-solid";

const Feedback = () => (
  <div className="contact-cards">
    <a className="contact-card" href="tel:+447538733798">
      <span aria-hidden="true">
        <Phone />
      </span>
      <span>
        <small>Call us</small>
        <strong>+44 7538 733798</strong>
      </span>
    </a>
    <a className="contact-card" href="mailto:info@yomtech.co.uk">
      <span aria-hidden="true">
        <Envelope />
      </span>
      <span>
        <small>Email us</small>
        <strong>info@yomtech.co.uk</strong>
      </span>
    </a>
    <div className="contact-card">
      <span aria-hidden="true">
        <Location />
      </span>
      <span>
        <small>Visit our workshop</small>
        <strong>
          Unit 8, Cobham Business Centre, Off Cobham Road, Birmingham B9 4UP
        </strong>
      </span>
    </div>
  </div>
);

export default Feedback;
