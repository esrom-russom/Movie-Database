import "./Footer.css";
import logo from "../assets/logo.svg"; // Adjust the path if needed

function Footer() {
  return (
    <footer>
      <p>
        <a href="/">
          <img src={logo} alt="MovieDB Logo" className="footer-logo" />
        </a>
      </p>
      <p>copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
