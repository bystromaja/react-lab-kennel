import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <header>
        <span className="logo">BETILLYS</span>
        <nav>
          <div id="hamburger-ikon" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Om isMenuOpen är true, lägger vi till klassen 'open' */}
          <ul id="nav-meny" className={this.state.isMenuOpen ? 'open' : ''}>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/om-oss">Om oss</Link></li>
            <li><Link to="/mina-hundar">Mina hundar</Link></li>
            <li><Link to="/valpar">Valpar</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;