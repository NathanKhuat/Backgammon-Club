import './WelcomeSection.css';
import board from './board2.png'

function WelcomeSection() {
  return (
    <div className='welcome-wrapper'>
      <span className='welcome-text trigger1 animate fadeLeft'>
        University of Washington's <br/>
        Undergraduate <br/>
        Backgammon Club
      </span>
      <div className='welcome-cover'>
      </div>
      <img src={board} className='welcome-img' />
      <div className='about1'></div>
      <span className='about-text trigger1 animate fadeIn'>About</span>
      <div className='about-bar trigger1 animate fadeIn'></div>
      <span className='about-message trigger1 animate fadeIn'>
        Welcome to the University of Washington Backgammon Club - 
        a vibrant community where students of all skill levels come 
        together to enjoy the strategic excitement of backgammon. Join 
        us for inclusive play, friendly competition, and a shared 
        passion for the game!</span>
      <div className='about2'></div> 
      <span className='statement-text trigger4 animate fadeIn'>
        We are Washington's Premier Backgammon Society for
        casual & competitive Backgammon
      </span>
    </div>
  );
}

export default WelcomeSection;