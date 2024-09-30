function Footer() {
  return (
    <footer>
      <div class="flex-container">
        <div class="flex-items">
          <a href="">
            <img
              src="/images/logo.png"
              alt="official logo"
              class="official-logo"
            />
          </a>
        </div>
        <div class="flex-items">
          <a href="pdf/terms_conditions.pdf" target="_blank">
            Terms and Conditions
          </a>
          <a href="pdf/privacy_policy.pdf" target="_blank">
            Privacy Policy
          </a>
        </div>
        <div class="flex-items">
          <a href="https://www.facebook.com/accesspharmainternational ">
            <img
              class="social-media"
              src="/images/apiltd_fb.png"
              alt="find us on facebook"
            />{" "}
            apiltd{" "}
          </a>
          <a href="https://www.linkedin.com/company/apiltd/">
            <img
              class="social-media"
              src="/images/apiltd_linkedin.png"
              alt="find us on linkedin"
            />{" "}
            accesspharmainternational
          </a>
        </div>
        <div class="flex-items">
          <a href="partners.html">Our Partners</a>
          <a href="https://eu.lifestraw.com/en-gb">
            <img
              class="partners-logo"
              src="/images/lifestraw_logo.png"
              alt="lifestraw logo"
            />
          </a>
          <a href="https://www.facebook.com/votrepharmacieespacepara">
            <img
              class="partners-logo"
              src="/images/VotrePharmacie.jpeg"
              alt="votrepharmacie logo"
            />
          </a>
        </div>
        <div class="flex-items">
          <a href="contact.html">Contact Us</a>
          <a href="tel:+237690803594">+ 237 690 803 594</a>
          <a href="mailto:contact@apiltd.co">contact@apiltd.co</a>
        </div>
      </div>
      <div>
        <p id="copyright">&copy;2024 Apiltd All Rights Reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
