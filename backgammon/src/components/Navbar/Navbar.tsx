import './Navbar.css';

function Navbar() { /* buttons arent changing size */
  return (
    <div className='nav-wrapper'>
      <span className='title-text trigger1 animate fadeUp'>UW Backgammon</span>
      <div className='nav-options'>
        <button className='nav-button trigger2 animate fadeUp'>Home</button>
        <button className='nav-button trigger3 animate fadeUp'>Meetings</button>
        <button className='nav-button trigger4 animate fadeUp'>About</button>
      </div>
    </div>
  );
}

export default Navbar;