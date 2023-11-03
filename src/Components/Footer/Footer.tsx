import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link
            style={{ textDecoration: "none", color: "grey" }}
            to="https://www.linkedin.com/in/dimitri-hector-a113b9149/"
          >
            LinkedIn
          </Link>
        </div>
        <div className="copyright">
          Copyright &copy;
          {new Date().getFullYear()}&nbsp; Dimitri Hector | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
