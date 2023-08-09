import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div>LinkedIn</div>
          <div>Instagram</div>
          <div>Youtube</div>
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
