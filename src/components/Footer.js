function Footer(props) {
  return (
    <div>
      <footer class="footer">
        <ul class="footer__nav">
          <li class="footer__item">
            <a class="footer__link" href="#">
              About
            </a>
          </li>

          <li class="footer__item">
            <a class="footer__link" href="#">
              Privacy Policy
            </a>
          </li>

          <li class="footer__item">
            <a class="footer__link" href="#">
              Contact Us
            </a>
          </li>

          <li class="footer__item">
            <a class="footer__link" href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <img src="img/icon.png" alt="Logo" class="footer__logo" />
        <p class="footer__copyright">
          &copy; Copyright by
          <a
            class="footer__link twitter-link"
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
