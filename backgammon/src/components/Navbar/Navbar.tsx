import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <span className='title-text trigger1 animate fadeUp'>UW Backgammon</span>
      <div className='nav-options'>
        <button className='nav-button trigger2 animate fadeUp'>
        <Link
            activeClass="active"
            to="welcome-text"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}>
            Home
          </Link>
        </button>
        <button className='nav-button trigger3 animate fadeUp'>
        <Link
            activeClass="active"
            to="header-text"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}>
            Meetings
          </Link>
        </button>
        <button className='nav-button trigger4 animate fadeUp'>
          <Link
            activeClass="active"
            to="about-text"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}>
            About
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;