import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Utvecklad av Maja Byström</p>
      <nav>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/om-oss">Om oss</Link></li>
          <li><Link to="/mina-hundar">Mina hundar</Link></li>
          <li><Link to="/valpar">Valpar</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;