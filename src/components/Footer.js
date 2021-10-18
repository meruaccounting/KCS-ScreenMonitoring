function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              About
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; Copyright by
          <a
            className="footer__link twitter-link"
            target="_blank"
            href="https://twitter.com/jonasschmedtman"
          >
            AYUSH & KAMALI
          </a>
          Don't use to teach. Don't claim as your own product.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
