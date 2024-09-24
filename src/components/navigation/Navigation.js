function Navigation() {
  return (
    <header class="header">
      <a href="">
        <img src="/images/logo.png" alt="official logo" class="official-logo" />
      </a>

      <nav class="navbar">
        <a class="nav-link active" aria-current="page" href="#about-us">
          About
        </a>
        <a class="nav-link" href="services.html">
          Services
        </a>
        <a class="nav-link" href="partners.html">
          Partners
        </a>
        <a class="nav-link" href="contact.html">
          Contact
        </a>
      </nav>
    </header>
  );
}
export default Navigation;
