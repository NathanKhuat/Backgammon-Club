import './Navbar.css';

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <span className='title-text'>UW Backgammon</span>
      <div className='nav-options'>
        <button className='nav-button'>Home</button>
        <button className='nav-button'>Meetings</button>
        <button className='nav-button'>About</button>
      </div>
    </div>
  );
}

export default Navbar;