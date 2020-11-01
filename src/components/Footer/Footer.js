import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="mt-auto">
      <Container className="d-md-flex py-4">
        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>RAYSHopitals</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">Designed by Group 56</div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#social" className="twitter">
            <i>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </i>
          </a>
          <a href="#social" className="facebook">
            <i>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </i>
          </a>
          <a href="#social" className="instagram">
            <i>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </i>
          </a>
          <a href="#social" className="google-plus">
            <i>
              <FontAwesomeIcon icon={["fab", "skype"]} />
            </i>
          </a>
          <a href="#social" className="linkedin">
            <i>
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </i>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
