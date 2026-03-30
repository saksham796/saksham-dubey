import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hello@sakshampy.in" data-cursor="disable">
                hello@sakshampy.in
              </a>
            </p>
            <h4>Education</h4>
            <p>Full Stack Dev</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/saksham801"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="Visit my GitHub"
            >
              Github <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/saksham-dubey-0451892a2"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="Visit my LinkedIn"
            >
              Linkedin <MdArrowOutward aria-hidden="true" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="Visit my Twitter"
            >
              Twitter <MdArrowOutward aria-hidden="true" />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Saksham Dubey</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
