import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        <a href="/">MovieDB</a>
      </p>
      <p>copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
